# EduPlugins — AI Primitives

Layout:

- `.claude-plugin/marketplace.json`, `.agents/plugins/marketplace.json`, `plugins/` — **generated**. Don't hand-edit; regenerate with `pnpm run plugins:build` after changing the sources below. Each `plugins/<slug>/` is written in three parallel formats sharing one `skills/` folder: `.claude-plugin/` + `.mcp.json` for Claude, root-level `plugin.json` + `mcp.json` for the vendor-neutral [agent-plugins.org](https://agent-plugins.org/) spec, and `.codex-plugin/plugin.json` for ChatGPT/Codex (catalogued at the repo-root `.agents/plugins/marketplace.json`).
- `skills/<slug>/SKILL.md` — hand-authored, one folder per skill, the single source of truth for skill content. Every skill is expected to be evidence-backed (see `docs/evidence/`).
- `connectors.json`, `plugins.json` — hand-authored data files. See [docs/data-model.md](docs/data-model.md) for the schema.
- `scripts/build-plugins.mjs` — the generator; also supports `--check` (used by `pnpm run plugins:check`) to detect drift.
- `.github/workflows/plugins-check.yml` — runs `plugins:check` on every PR into `main` and on push to `main`.
- `docs/evidence/` — research backing each `example-educator` skill's pedagogical approach; one file per skill plus a README index.
- `packages/eval/` — a small eval harness (`evaluate()`) for scoring skill output against expected results; not related to the `eduplugins/packages` repo (curriculum data) despite the name.

All changes land on `main` via PR; CI (`plugins:check`) must pass before merging.
