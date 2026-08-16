# AGENTS.md — Project Rules (any agent entering this project reads this first)

This project runs the `project-ai-docs` protocol on itself (dogfood). All agents must comply:

1. **Read first**: `docs/.ai/index.md` + the tail of `docs/.ai/changelog.md`, then point-read core/ per task (this package is documentation-only; no modules/config/best-practices)
2. **Write back**: after any substantive change to SKILL.md / README.md / template(s):
   - update the matching docs (protocol text ↔ template wording stay consistent)
   - append a changelog entry to `docs/.ai/changelog.md` (date + what + why + key details)
3. **Red lines**:
   - no mention of any source project name (generic, unattributed)
   - `template/` and `template.en/` layers must match the SKILL.md layer table
   - verified facts only, no fabrication
4. **File roles**:
   - `skills/project-ai-docs/SKILL.md` = the protocol (Chinese, authoritative)
   - `skills/project-ai-docs/SKILL.en.md` = English protocol variant (swap-in: rename over SKILL.md to use; not discovered as a separate skill)
   - `skills/project-ai-docs/template/` = Init scaffold (Chinese); `template.en/` = scaffold (English) — the only layer allowed placeholders
   - `README.md` / `README.en.md` = for human users (ZH / EN)
   - `docs/.ai/` = this package's own KB (protocol self-description)
   - The runtime skill unit = `skills/project-ai-docs/` (plugin discovery root, pointed at by `extensions/dsh/index.js`)