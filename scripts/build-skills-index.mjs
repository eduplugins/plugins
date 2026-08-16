#!/usr/bin/env node
// Builds a single JSON index of every skill's frontmatter — name,
// description, version, released, keywords, references — for
// .github/workflows/sync-skills-r2.yml to upload to the `skills` R2 bucket
// on every merge to main. eduplugins/site's /skills route reads that one
// object at request time (env.SKILLS.get("index.json")) rather than running
// this repo's build pipeline in-process.
//
// Deliberately dependency-free, like build-plugins.mjs — there's no
// lockfile/node_modules at this repo's root, so this needs to run on a bare
// `actions/checkout` + `actions/setup-node`, no install step. The frontmatter
// parser below is a small indentation-based YAML subset (scalars, quoted
// strings, block scalars `>`/`|`, one level of nested mapping/sequence) —
// verified against every SKILL.md in this repo (see docs/data-model.md for
// the schema); it is not a general YAML parser.
//
// Run via `node scripts/build-skills-index.mjs [outfile]` (defaults to
// dist/skills-index.json, already gitignored).

import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT_FILE = process.argv[2] || join(ROOT, "dist", "skills-index.json");

function indentOf(line) {
  return line.match(/^ */)[0].length;
}

function unquote(s) {
  return s.trim().replace(/^["']|["']$/g, "");
}

// Parses a block of YAML lines (starting at `start`, ending before `end`)
// that all share the same indentation `indent`, returning either a mapping
// (object), a sequence (array of strings), or a scalar string.
function parseBlock(lines, start, end, indent) {
  let i = start;
  while (i < end && lines[i].trim() === "") i++;
  if (i >= end) return undefined;

  const isSequence = lines[i].trim().startsWith("- ") || lines[i].trim() === "-";
  if (isSequence) {
    const arr = [];
    while (i < end) {
      if (lines[i].trim() === "") {
        i++;
        continue;
      }
      if (indentOf(lines[i]) !== indent) break;
      const trimmed = lines[i].trim();
      if (!trimmed.startsWith("-")) break;
      arr.push(unquote(trimmed.slice(1)));
      i++;
    }
    return arr;
  }

  const obj = {};
  while (i < end) {
    if (lines[i].trim() === "") {
      i++;
      continue;
    }
    if (indentOf(lines[i]) !== indent) break;
    const m = lines[i].match(/^\s*([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (!m) {
      i++;
      continue;
    }
    const [, key, rest] = m;
    i++;
    if (rest === "") {
      // Nested mapping/sequence, indented one level deeper than this key.
      let childEnd = i;
      while (childEnd < end && (lines[childEnd].trim() === "" || indentOf(lines[childEnd]) > indent)) childEnd++;
      obj[key] = parseBlock(lines, i, childEnd, indent + 2);
      i = childEnd;
    } else if (/^[>|][+-]?$/.test(rest)) {
      const folded = rest.startsWith(">");
      const block = [];
      while (i < end && (lines[i].trim() === "" || indentOf(lines[i]) > indent)) {
        block.push(lines[i].slice(indent + 2));
        i++;
      }
      while (block.length && block.at(-1).trim() === "") block.pop();
      obj[key] = folded ? block.join(" ").replace(/\s+/g, " ").trim() : block.join("\n").trim();
    } else {
      obj[key] = unquote(rest);
    }
  }
  return obj;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const lines = match[1].split(/\r?\n/);
  return parseBlock(lines, 0, lines.length, 0) || {};
}

function findSkillMdFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...findSkillMdFiles(full));
    else if (entry === "SKILL.md") out.push(full);
  }
  return out;
}

function buildIndex() {
  const skillsDir = join(ROOT, "skills");
  const categories = readdirSync(skillsDir).filter((c) => statSync(join(skillsDir, c)).isDirectory());
  const skills = [];
  for (const category of categories) {
    const categoryDir = join(skillsDir, category);
    const names = readdirSync(categoryDir).filter((n) => statSync(join(categoryDir, n)).isDirectory());
    for (const name of names) {
      const skillMdPath = join(categoryDir, name, "SKILL.md");
      if (!existsSync(skillMdPath)) continue;
      const slug = `${category}/${name}`;
      const fm = parseFrontmatter(readFileSync(skillMdPath, "utf8"));
      skills.push({
        slug,
        name: fm.name || slug,
        description: fm.description || "",
        version: fm.version,
        released: fm.released,
        keywords: fm.keywords,
        references: fm.references,
      });
    }
  }
  return skills.sort((a, b) => a.slug.localeCompare(b.slug));
}

const skills = buildIndex();
mkdirSync(dirname(OUT_FILE), { recursive: true });
writeFileSync(OUT_FILE, JSON.stringify(skills, null, 2) + "\n");
console.log(`build-skills-index: wrote ${skills.length} skill(s) to ${OUT_FILE}`);
