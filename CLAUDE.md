# EduPlugins — plugins

An open-source Claude plugin marketplace for K-12 educators. This repo is the
source of truth for skills, connectors, and plugins; it's one of five repos
under the [EduPlugins](https://github.com/EduPlugins) org (`site`, `plugins`,
`packages`, `mcp`, `api`).

Layout:

- `.claude-plugin/marketplace.json`, `plugins/` — **generated**. Don't hand-edit; regenerate with `pnpm run plugins:build` after changing the sources below.
- `skills/<slug>/SKILL.md` — hand-authored, one folder per skill, the single source of truth for skill content.
- `connectors.json`, `plugins.json` — hand-authored data files. See [docs/data-model.md](docs/data-model.md) for the schema.
- `scripts/build-plugins.mjs` — the generator; also supports `--check` (used by `pnpm run plugins:check`) to detect drift.
- `packages/eval/` — a small eval harness (`evaluate()`) for scoring skill output against expected results; not related to the `EduPlugins/packages` repo (curriculum data) despite the name.

Related repos:
- `EduPlugins/site` — the informational website about this project (React Router + Cloudflare Workers).
- `EduPlugins/packages` — curriculum data (`acv9`, `common-core`, `uk-curriculum`) that skills like `skills/developer/tag` reference.
- `EduPlugins/mcp` — deploys one Cloudflare Worker MCP server per package in `EduPlugins/packages`.
- `EduPlugins/api` — custom action endpoints (e.g. `/label`, which vendors a copy of `skills/developer/tag` from this repo).

Note: `.claude/` (this repo's own Claude Code config) is unrelated to `.claude-plugin/` and `skills/` above — the former is tooling for developing this repo, the latter is the content this repo publishes.
