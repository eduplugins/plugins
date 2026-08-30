# EduPlugins

[![plugins-check](https://github.com/eduplugins/plugins/actions/workflows/plugins-check.yml/badge.svg)](https://github.com/eduplugins/plugins/actions/workflows/plugins-check.yml)

An open-source project of AI primitives (skills, connectors and plugins) for K-12 educators.

## Supported tools

| Tool | Status | Built from |
|---|---|---|
| [Claude](https://code.claude.com/docs/en/plugin-marketplaces.md) (Claude Code / Desktop) | ✅ Working | `.claude-plugin/marketplace.json`, `plugins/<slug>/.claude-plugin/` |
| [ChatGPT](https://developers.openai.com/plugins/build/plugins) / [Codex](https://developers.openai.com/codex/) | ✅ Working | `.agents/plugins/marketplace.json`, `plugins/<slug>/.codex-plugin/` |
| [agent-plugins.org](https://agent-plugins.org/) (vendor-neutral spec) | ✅ Working | `plugins/<slug>/plugin.json` + `mcp.json` |

## Install

In Claude Code or Claude Desktop:

```
/plugin marketplace add eduplugins/plugins
/plugin install classroom-teacher@eduplugins
```

In Codex CLI (also shared by the ChatGPT desktop app / IDE extension):

```
codex plugin marketplace add eduplugins/plugins
```

then install a plugin by name from the `/plugins` browser inside a `codex` session. (Codex plugins are a fast-moving, recently-shipped feature — check `codex plugin marketplace --help` if this syntax has moved on.)

Any client that implements the [agent-plugins.org](https://agent-plugins.org/) spec can load a plugin directly from `plugins/<slug>/` (e.g. `plugins/classroom-teacher/`) — it reads `plugin.json` and discovers skills under `skills/`.


## Repo structure

```
.github/workflows/plugins-check.yml   generated-output check, run on every PR into main
.claude-plugin/marketplace.json       generated — the marketplace manifest Claude reads
.agents/plugins/marketplace.json      generated — the plugin catalog Codex/ChatGPT reads
skills/<category>/<name>/SKILL.md     hand-authored — one folder per skill, the evidence-backed primitive
connectors.json                       hand-authored — external MCP servers / resources
plugins.json                          hand-authored — bundles of skills + connectors, by education role
plugins/<slug>/                       generated — installable plugins, built from the above:
  .claude-plugin/, .mcp.json            - Claude's plugin format
  plugin.json, mcp.json                 - agent-plugins.org spec 1.0.0 format
  .codex-plugin/plugin.json             - Codex/ChatGPT's plugin format
  skills/                                - shared by all three formats
scripts/build-plugins.mjs             the generator (pnpm run plugins:build / plugins:check)
docs/data-model.md                    schema reference for SKILL.md / connectors.json / plugins.json
docs/evidence/                        research backing each skill's pedagogical approach
packages/eval/                        eval harness used to score skill output quality
```

`plugins/` and `.claude-plugin/marketplace.json` are generated and committed. See [docs/data-model.md](docs/data-model.md) for the full schema and [CONTRIBUTING.md](CONTRIBUTING.md) for how to add a skill, connector, or plugin.

## Contributing

All changes land on `main` via pull request — see [CONTRIBUTING.md](CONTRIBUTING.md). `plugins-check` must pass before merging.

## Development

```
pnpm run plugins:build   # regenerate plugins/ and marketplace.json from the data files
pnpm run plugins:check   # verify nothing has drifted (no code changes)
```

## License

[MIT](LICENSE).
