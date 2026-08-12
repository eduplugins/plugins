# Contributing

## Add a skill

1. Create `skills/<your-skill-slug>/SKILL.md` with `name` + `description` frontmatter (see [docs/data-model.md](docs/data-model.md)).
2. Add any supporting files in the same folder.
3. Reference it from at least one entry in `plugins.json`, or it won't be installable by anyone.

## Add a connector

Add an entry to `connectors.json` — `slug`, `type` (`mcp-http` / `mcp-sse` / `mcp-stdio` / `url`), `url`, `description`. See [docs/data-model.md](docs/data-model.md) for what each `type` means.

## Add or edit a plugin

Add or edit an entry in `plugins.json` — `slug`, `name`, `description`, and the `skills`/`connectors` slugs it bundles.

## Porting a skill or connector from another project

If you're bringing in a skill or listing a connector from an existing open-source project, check its license first and note the original source and license in the skill's body content (or the connector's description) — don't strip attribution.

## After editing any of the above

```
pnpm run plugins:build
```

This regenerates `plugins/` and `.claude-plugin/marketplace.json`. Commit the generated changes along with your edits — `pnpm run plugins:check` (run in CI) fails the build if they're out of sync.

## Working on the website

The informational site lives in its own repo, [eduplugins/site](https://github.com/eduplugins/site) — see that repo's `CLAUDE.md` for its design context before making UI changes there.

## PR checklist

- [ ] `pnpm run plugins:build` run, generated output committed
- [ ] `pnpm run plugins:check` passes
