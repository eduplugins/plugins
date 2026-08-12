# EduPlugins

An open-source [Claude plugin marketplace](https://code.claude.com/docs/en/plugin-marketplaces.md) for K-12 educators — skills, connectors, and plugins built for classroom practice, defined as plain files in this repo and added to Claude with one command.

## Install

In Claude Code or Claude Desktop:

```
/plugin marketplace add eduplugins/plugins
/plugin install example-plugin@eduplugins
```

Browse what's available on the [EduPlugins site](https://github.com/eduplugins/site) (private — the informational site itself lives in its own repo).

## Repo structure

```
.claude-plugin/marketplace.json   generated — the marketplace manifest Claude reads
skills/<slug>/SKILL.md            hand-authored — one folder per skill
connectors.json                  hand-authored — external MCP servers / resources
plugins.json                     hand-authored — bundles of skills + connectors
plugins/<slug>/                  generated — installable plugins, built from the above
scripts/build-plugins.mjs        the generator (pnpm run plugins:build / plugins:check)
docs/data-model.md                schema reference for connectors.json / plugins.json
packages/eval/                    eval harness used to score skill output quality
```

`plugins/` and `.claude-plugin/marketplace.json` are generated and committed — don't hand-edit them. See [docs/data-model.md](docs/data-model.md) for the full schema and [CONTRIBUTING.md](CONTRIBUTING.md) for how to add a skill, connector, or plugin.

This repo is one of five under the [EduPlugins](https://github.com/eduplugins) org — see [eduplugins/site](https://github.com/eduplugins/site) for the project overview, [eduplugins/packages](https://github.com/eduplugins/packages) for the curriculum data skills reference, [eduplugins/mcp](https://github.com/eduplugins/mcp) for the per-package MCP servers, and [eduplugins/api](https://github.com/eduplugins/api) for custom actions (e.g. `/label`).

## Development

```
pnpm run plugins:build   # regenerate plugins/ and marketplace.json from the data files
pnpm run plugins:check   # verify nothing has drifted (no code changes)
```

## License

[MIT](LICENSE).
