# project-ai-docs AI 上下文索引

## 项目类型

DSH skill 包：通用项目 AI 文档协议（`SKILL.md`）+ Init 骨架（`template/`）。纯文档项目，无代码、无依赖、无构建。中英双语（分文件）：`README.en.md` / `SKILL.en.md` / `AGENTS.en.md`。

## 文档结构

| 文件 | 内容 |
|---|---|
| `skills/project-ai-docs/SKILL.md` | 协议本体（中文）：会话开始 / Init / 变更后 / 维护 / 分层 |
| `skills/project-ai-docs/SKILL.en.md` | 协议英文版（替换式：改名覆盖 SKILL.md 即用） |
| `skills/project-ai-docs/template/` + `template.en/` | Init 复制骨架（中/英，按协议语言取用） |
| `README.md` / `README.en.md` | 给用户的用法说明（中/英，安装 A/B 两路） |
| `AGENTS.md` | 项目级 agent 规则（英文，agent 通用） |
| `package.json` / `cordis.patch.yml` / `extensions/` | npm 包 + DSH bundle 适配层 |

## 关键约束（红线）

- 协议文本必须与通用法则一致（README 所列 8 条）
- `template/` 与 `SKILL.md` 说辞一致：模板分层 = SKILL.md 分层表
- 对任何目标项目：只写实测事实，禁止编造
- 本包自身改动必须遵守协议「变更后」条款（清冗余 + 回写 + changelog 记账）
- 中英两版协议必须内容同步（SKILL.md ↔ SKILL.en.md 同轮更新）

## 变更台账

[changelog.md](./changelog.md) — 最近改动记录，会话开头先读尾部。