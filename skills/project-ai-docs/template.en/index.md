# {Project Name} AI Context Index

## ⚠️ Must-Follow Rules (Hard Constraints)

<!-- Hard constraints go before any tech info. Fill from real measurements. Example:
1. Pure static export: no API routes (app/api/), no searchParams unless paired with generateStaticParams
2. All data read from Markdown; comments via a third-party service (e.g. Giscus)
3. After every task: clean up redundancy + update the matching doc + write a changelog entry
-->

## Project Type

<!-- One-line pitch: what this project is and with what stack. Example: static blog, Next.js App Router + TypeScript + Tailwind. -->

## Document Structure (Priority, High → Low)

### Core Docs (Required Reading)

| Doc Path | Priority | Content |
|---|---|---|
| [core/project-overview.md](./core/project-overview.md) | 1 | Overview, tech stack, directory layout, key features |
| [core/architecture.md](./core/architecture.md) | 2 | Architecture, data flow, routing, performance |
| [core/quick-start.md](./core/quick-start.md) | 3 | Requirements, measured commands, dev flow |

### Change Log (Read at Every Session Start)

| Doc Path | Content |
|---|---|
| [changelog.md](./changelog.md) | Append-only ledger; read the tail for current state |

### Point-Read Layers (On Task Relevance)

| Doc Path | When |
|---|---|
| [modules/](./modules/) | when the task touches that module |
| [config/](./config/) | when hitting a config issue |
| [best-practices/](./best-practices/) | when developing / optimizing / deploying |

### Routing Priority

1. changelog tail — current state
2. core/ — base understanding
3. point-read modules/ + config/ by task
4. best-practices/ on demand

## Hard Constraints

<!-- List measured constraints that override everything else: forbidden patterns, must-do rules, non-negotiable boundaries. Fill from real measurements; add `TODO` for anything unverified. -->