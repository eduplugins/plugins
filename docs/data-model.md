# Data model

Schema reference for the hand-authored source files. After editing any of these, run `pnpm run plugins:build` (see [CONTRIBUTING.md](../CONTRIBUTING.md)).

## `skills/<category>/<name>/SKILL.md`

One folder per skill, grouped by category (e.g. `skills/assessment/rubric-builder/`). The skill's slug is `<category>/<name>`. `SKILL.md` needs frontmatter:

| Field | Required | Description |
|---|---|---|
| `name` | yes | Display name |
| `description` | yes | One-line summary shown in the catalog, and the trigger text the client matches against |
| `version` | no | Skill version (semver-ish, e.g. `1.1.0`) |
| `released` | no | Date the current version was last revised, `YYYY-MM-DD` |
| `keywords` | no | Catalog/discovery taxonomy — free-form nested object (e.g. `content-type`, `use-case`, `keyword`) |
| `references` | no | Array of source names the skill's evidence base draws on |

Everything after the frontmatter is the skill's instructions. A skill is expected to be evidence-backed: cite the research or authoritative guidance behind its approach in an "Evidence base" section in the body, and list the same sources in `references`. See [docs/evidence/](evidence/) for the full research behind each `example-educator` skill, and [CONTRIBUTING.md](../CONTRIBUTING.md) for what a new skill's evidence base needs.

## `connectors.json`

An array of external MCP servers (or plain links) a plugin can bundle.

| Field | Required | Description |
|---|---|---|
| `slug` | yes | Unique identifier; also the key under `mcpServers` in the generated `.mcp.json` |
| `type` | yes | One of `mcp-http`, `mcp-sse`, `mcp-stdio`, `url` (see below) |
| `description` | yes | One-line summary shown in the catalog |
| `url` | for `mcp-http` / `mcp-sse` / `url` | Server endpoint (http/sse) or plain resource link (`url`) |
| `command` | for `mcp-stdio` | Executable to launch the local MCP server |
| `args` | optional, `mcp-stdio` only | Array of CLI args passed to `command` |
| `env` | optional, `mcp-stdio` only | Object of environment variables passed to the process |

Connector types:

- **`mcp-http`** — remote MCP server over streamable HTTP. Requires `url`.
- **`mcp-sse`** — remote MCP server over SSE. Requires `url`.
- **`mcp-stdio`** — local MCP server launched as a subprocess. Requires `command`; `args`/`env` optional.
- **`url`** — a plain link (e.g. a curriculum standard or reference page), not an MCP server. Not included in the generated `.mcp.json`.

`pnpm run plugins:build` validates that every connector has the fields its `type` requires and fails the build otherwise.

## `plugins.json`

An array of installable plugin bundles.

| Field | Required | Description |
|---|---|---|
| `slug` | yes | Unique identifier; also the plugin's directory name under `plugins/` and its marketplace entry name |
| `name` | yes | Display name |
| `description` | yes | One-line summary shown in the catalog and marketplace |
| `skills` | yes (can be empty) | Array of skill slugs (`<category>/<name>`) this plugin bundles |
| `connectors` | yes (can be empty) | Array of connector slugs this plugin bundles |

Every `skills`/`connectors` slug must resolve to an entry in `skills/` / `connectors.json`, or the build fails.

## Generated output

For each plugin, `pnpm run plugins:build` writes `plugins/<slug>/` twice over — once in Claude's format, once in the vendor-neutral [agent-plugins.org](https://agent-plugins.org/) format ([spec 1.0.0](https://github.com/agentplugins/agent-plugins-spec)) — both sharing the same `skills/` folder:

- `skills/<category>-<name>/` — a copy of each bundled skill's folder (shared by both formats)
- `.claude-plugin/plugin.json` — Claude's plugin manifest (`name`, `displayName`, `description`, `skills` path)
- `.mcp.json` — Claude's MCP config; present only if the plugin bundles at least one `mcp-http` / `mcp-sse` / `mcp-stdio` connector; maps each to an `mcpServers` entry (`{ type, url }` for http/sse, `{ type, command, args?, env? }` for stdio)
- `plugin.json` — agent-plugins.org manifest (`$schema`, `name`, `description`, `license`, `homepage`, `repository`), validated against [`plugin.schema.json`](https://agent-plugins.org/schemas/1.0.0/plugin.schema.json); the build fails if `plugin.slug` isn't a valid agent-plugins.org `name`
- `mcp.json` — agent-plugins.org MCP config; same connectors as `.mcp.json` above but with spec type names (`streamable-http` instead of `http`), present under the same condition

It also writes `.claude-plugin/marketplace.json` at the repo root, listing every plugin as a Claude marketplace entry. agent-plugins.org has no marketplace-level manifest in v1.0.0 — clients following that spec load a plugin directly from its `plugins/<slug>/` folder.
