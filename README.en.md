# project-ai-docs

A generic per-project AI documentation protocol skill: each project keeps a `docs/.ai/` knowledge base — agents read the index before acting and write changes back, keeping agent context focused and project knowledge precise.

Chinese version: [README.md](README.md).

## Core Principles

1. **Map first** — `index.md` is the single entry, a priority routing table for all docs
2. **Tiered budget** — core/modules/config/best-practices with explicit priority to control token cost
3. **Constraints first** — hard rules go at the top of index, before any tech info
4. **Point reads** — modular docs, read only task-relevant slices
5. **Write-back loop** — task done = docs updated; knowledge lives in docs, not session memory
6. **Incremental awareness** — changelog ledger; reading its tail tells you the current state
7. **Human/agent split** — README for humans, docs/.ai for agents
8. **Verifiable facts** — measured paths/versions/commands only, no guesses

## Contents

```
project-ai-docs/
├── skills/project-ai-docs/   # runtime skill unit (DSH plugin discovery root)
│   ├── SKILL.md              # the protocol (Chinese)
│   ├── SKILL.en.md           # English protocol variant (swap-in: rename over SKILL.md to use)
│   ├── template/             # Init scaffold (Chinese)
│   └── template.en/          # Init scaffold (English)
├── extensions/dsh/index.js   # DSH bundle adapter (points at skills/)
├── cordis.patch.yml          # bundle registration
├── package.json              # npm manifest (dsh.bundle.patch)
├── AGENTS.md                 # project agent rules (English, agent-facing)
├── .gitignore                # git ignore (node_modules / *.tgz / *.log)
├── .gitattributes            # linguist analysis + line-ending normalization
├── .github/workflows/publish.yml  # npm publishing pipeline (manual trigger)
├── README.md                 # Chinese readme
├── README.en.md              # this file
├── LICENSE                   # MIT
└── docs/.ai/                 # this package's own KB
```

## Install (DSH)

### A: Copy to a skill discovery root (zero deps)

| Tier | Path |
|---|---|
| User (recommended) | `%USERPROFILE%\.dsh\skills\` |
| Global agents-home | `%USERPROFILE%\.agents\skills\` |
| Project | `<project-root>\.dsh\skills\` or `<project-root>\.agents\skills\` |

```powershell
# copy the runtime skill unit (skills/project-ai-docs/ → ~/.dsh/skills/project-ai-docs/)
Copy-Item -Recurse D:\Desktop\project-ai-docs\skills\project-ai-docs "$env:USERPROFILE\.dsh\skills\project-ai-docs"
# usually no restart needed (live watch); restart once if the new session can't see it

# uninstall
Remove-Item -Recurse "$env:USERPROFILE\.dsh\skills\project-ai-docs"
```

### B: Install via dsh plugin

```powershell
dsh plugin --profile web add project-ai-docs                    # standard: from npm registry (0.1.0 published)
dsh plugin --profile web add file:D:\Desktop\project-ai-docs   # local pre-release verification
dsh plugin --profile web up project-ai-docs                     # update
dsh plugin --profile web rm project-ai-docs                     # remove
```

> Path B registers `skills/` as a DSH skill source through `dsh.bundle.patch` → `cordis.patch.yml` → `extensions/dsh/index.js` (same pattern as Aegis); restart DSH after install.

Other hosts (Claude Code / Codex, etc.): copy `skills/project-ai-docs/` into their skills directory.

## Usage

| Trigger | Behavior |
|---|---|
| Session start | read index + changelog, point-read relevant layers |
| "初始化项目文档" / "/init" | Init protocol: scan → scaffold → verified fill |
| Task done | clean up → write back → changelog entry |

## Init Cheat Sheet

```bash
# 1. scaffold (agent or manual copy)
# 2. agent scans signals and fills per SKILL.md §Init
# 3. verify every path/version/command traces to source
```

## Publishing (Manual)

A GitHub Action (`.github/workflows/publish.yml`) publishes the current `package.json` version on manual trigger:

1. Create an npm **Granular Access Token (GAT)** for CI (skips OTP; npm is restricting bypass-2FA tokens for direct publishing, GAT is the recommended path):
   - Web: npmjs.com → Access Tokens → Generate New Token → **Granular Access Token**
   - Grant `Publish packages` + expiry; verify 2FA once at creation, then publishing needs no OTP
2. Add an `NPM_TOKEN` secret (that token) under repo Settings → Secrets and variables → Actions
3. Bump locally and commit: `npm version 0.1.1` (or edit package.json) → git commit/push
4. Actions tab → **publish** → Run workflow (no inputs; publishes the current package.json version)
5. Flow: read version → duplicate check (abort if already published) → `npm pack --dry-run` sanity check → `npm publish` → tag `vX.Y.Z` and push

No local npm login / publish needed.