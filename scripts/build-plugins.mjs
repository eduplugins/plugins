#!/usr/bin/env node
// Regenerates plugins/ and .claude-plugin/marketplace.json from the hand-authored
// sources of truth: skills/*/SKILL.md, connectors.json, plugins.json.
// See docs/data-model.md for the schema. Run via `pnpm run plugins:build`
// (or `--check` via `pnpm run plugins:check` to verify nothing has drifted).

import { existsSync, mkdirSync, rmSync, readFileSync, writeFileSync, readdirSync, statSync, cpSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const CHECK = process.argv.includes("--check");
// connectors.json `type` -> .mcp.json server `type`. "url" connectors are plain
// links (not MCP servers) and are intentionally excluded from this map.
const MCP_TYPE_MAP = { "mcp-http": "http", "mcp-sse": "sse", "mcp-stdio": "stdio" };

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (m) fm[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
  }
  return fm;
}

function loadSkills() {
  const skillsDir = join(ROOT, "skills");
  const skills = new Map();
  if (!existsSync(skillsDir)) return skills;
  const categories = readdirSync(skillsDir).filter((c) => statSync(join(skillsDir, c)).isDirectory());
  for (const category of categories) {
    const categoryDir = join(skillsDir, category);
    const names = readdirSync(categoryDir).filter((n) => statSync(join(categoryDir, n)).isDirectory());
    for (const name of names) {
      const dir = join(categoryDir, name);
      const skillMdPath = join(dir, "SKILL.md");
      if (!existsSync(skillMdPath)) continue;
      const slug = `${category}/${name}`;
      const fm = parseFrontmatter(readFileSync(skillMdPath, "utf8"));
      skills.set(slug, { slug, dir, name: fm.name || slug, description: fm.description || "" });
    }
  }
  return skills;
}

function loadJson(name) {
  return JSON.parse(readFileSync(join(ROOT, name), "utf8"));
}

const skills = loadSkills();
const connectors = new Map(loadJson("connectors.json").map((c) => [c.slug, c]));
const plugins = loadJson("plugins.json");

const errors = [];
for (const connector of connectors.values()) {
  if (connector.type === "url") continue;
  const mcpType = MCP_TYPE_MAP[connector.type];
  if (!mcpType) {
    errors.push(`connector "${connector.slug}" has unknown type "${connector.type}"`);
  } else if (mcpType === "stdio") {
    if (!connector.command) errors.push(`connector "${connector.slug}" (mcp-stdio) is missing "command"`);
  } else if (!connector.url) {
    errors.push(`connector "${connector.slug}" (${connector.type}) is missing "url"`);
  }
}
for (const plugin of plugins) {
  for (const s of plugin.skills ?? []) {
    if (!skills.has(s)) errors.push(`plugin "${plugin.slug}" references unknown skill "${s}"`);
  }
  for (const c of plugin.connectors ?? []) {
    if (!connectors.has(c)) errors.push(`plugin "${plugin.slug}" references unknown connector "${c}"`);
  }
}
if (errors.length > 0) {
  console.error("build-plugins: validation failed:\n" + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}

function generate(outRoot) {
  const pluginsOut = join(outRoot, "plugins");
  rmSync(pluginsOut, { recursive: true, force: true });
  mkdirSync(pluginsOut, { recursive: true });

  const marketplaceEntries = [];

  for (const plugin of plugins) {
    const pluginDir = join(pluginsOut, plugin.slug);
    mkdirSync(join(pluginDir, ".claude-plugin"), { recursive: true });

    writeFileSync(
      join(pluginDir, ".claude-plugin", "plugin.json"),
      JSON.stringify(
        { name: plugin.slug, displayName: plugin.name, description: plugin.description, skills: "./skills/" },
        null,
        2,
      ) + "\n",
    );

    const skillsOut = join(pluginDir, "skills");
    mkdirSync(skillsOut, { recursive: true });
    for (const s of plugin.skills ?? []) {
      cpSync(skills.get(s).dir, join(skillsOut, s.replace(/\//g, "-")), { recursive: true });
    }

    const mcpServers = {};
    for (const c of plugin.connectors ?? []) {
      const connector = connectors.get(c);
      const mcpType = MCP_TYPE_MAP[connector.type];
      if (!mcpType) continue; // "url" connectors are plain links, not MCP servers
      mcpServers[connector.slug] =
        mcpType === "stdio"
          ? {
              type: mcpType,
              command: connector.command,
              ...(connector.args ? { args: connector.args } : {}),
              ...(connector.env ? { env: connector.env } : {}),
            }
          : { type: mcpType, url: connector.url };
    }
    if (Object.keys(mcpServers).length > 0) {
      writeFileSync(join(pluginDir, ".mcp.json"), JSON.stringify({ mcpServers }, null, 2) + "\n");
    }

    marketplaceEntries.push({ name: plugin.slug, source: `./plugins/${plugin.slug}`, description: plugin.description });
  }

  mkdirSync(join(outRoot, ".claude-plugin"), { recursive: true });
  writeFileSync(
    join(outRoot, ".claude-plugin", "marketplace.json"),
    JSON.stringify(
      { name: "eduplugins", owner: { name: "EduPlugins", url: "https://github.com/eduplugins/plugins" }, plugins: marketplaceEntries },
      null,
      2,
    ) + "\n",
  );
}

function readTree(dir) {
  const out = new Map();
  (function walk(d) {
    if (!existsSync(d)) return;
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, entry.name);
      if (entry.isDirectory()) walk(p);
      else out.set(relative(dir, p), readFileSync(p, "utf8"));
    }
  })(dir);
  return out;
}

if (CHECK) {
  const tmp = join(os.tmpdir(), `eduplugins-build-check-${Date.now()}`);
  mkdirSync(tmp, { recursive: true });
  generate(tmp);

  const prefixed = (dir, base) => new Map([...readTree(dir)].map(([p, c]) => [join(base, p), c]));
  const fresh = new Map([...prefixed(join(tmp, "plugins"), "plugins"), ...prefixed(join(tmp, ".claude-plugin"), ".claude-plugin")]);
  const current = new Map([
    ...prefixed(join(ROOT, "plugins"), "plugins"),
    ...prefixed(join(ROOT, ".claude-plugin"), ".claude-plugin"),
  ]);

  const diffs = [...new Set([...fresh.keys(), ...current.keys()])].filter((p) => fresh.get(p) !== current.get(p));

  rmSync(tmp, { recursive: true, force: true });

  if (diffs.length > 0) {
    console.error("build-plugins --check: out of date, run `pnpm run plugins:build`:\n" + diffs.map((d) => `  - ${d}`).join("\n"));
    process.exit(1);
  }
  console.log("build-plugins --check: up to date.");
} else {
  generate(ROOT);
  console.log(`build-plugins: wrote ${plugins.length} plugin(s) to plugins/ and .claude-plugin/marketplace.json`);
}
