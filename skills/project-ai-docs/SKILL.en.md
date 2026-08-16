---
name: project-ai-docs-en
description: >-
  Generic per-project AI documentation protocol (docs/.ai). Read index and
  changelog at session start, write changes back to docs — keeps agent context
  focused and project knowledge precise. "初始化项目文档" / "生成 AI 文档" /
  "/init" triggers the Init protocol. Language/stack agnostic. English variant
  of project-ai-docs; the default Chinese protocol is SKILL.md.
---

# Project AI Docs Protocol

Convention: `<project root>/docs/.ai/` holds stable project knowledge. Session memory fades; documents persist.

## Session Start

1. Read `index.md` plus the tail of `changelog.md`
2. If `docs/.ai` is missing, offer Init (run immediately if already requested)
3. Point-read the layered docs by task; never scan the whole repo

## Init (From Scratch)

Trigger: user says "初始化项目文档", "生成 AI 文档", "/init", or after step 2 above.

1. **Scan**: README, manifest (package.json / pyproject.toml / go.mod / Cargo.toml by language), source directories, config files, build & CI, test framework
2. **Scaffold**: copy this skill's `template.en/` → `docs/.ai/`
3. **Fill**:
   - `index.md`: one-line pitch → hard constraints → layered routing table
   - `core/`: project-overview (what/stack/structure), architecture (layers/data flow/routing), quick-start (measured commands)
   - `modules/`: one card per business module (responsibility, key files, data flow)
   - `config/`: one file per major config
   - `best-practices/`: development / deployment / naming / performance (from measured code)
   - `changelog.md`: initial entry
4. **Iron rule**: verified facts only, no fabrication; mark uncertain as `TODO`
5. **Verify**: every path/version/command must trace to a source; otherwise delete or mark TODO

## After Changes

1. **Clean up** files/modules/deps/dirs
2. **Write back** to the matching doc: structure → overview; architecture → architecture; module → module card; config → config; new pitfalls → best-practices
3. **Log**: prepend to `changelog.md` — date + what + why + key details

**Skip**: throwaway code, trivial fixes, experimental deps.

## Maintenance

- Hot docs thin; link source paths, never copy code
- best-practices separate from code standards; stable facts only
- README for humans, docs/.ai for agents
- Fix doc-code drift within the same task

## Layers

| Layer | Path | When |
|---|---|---|
| Log | `changelog.md` | every session start (latest head) |
| Core | `core/` | every session start / project understanding |
| Modules | `modules/` | on task relevance |
| Config | `config/` | on config issues |
| Practices | `best-practices/` | on dev / optimize / deploy |

Read order: changelog tail (current state) → core (base) → point-read modules/config by task → practices on demand.