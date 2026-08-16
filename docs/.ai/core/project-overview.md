# project-ai-docs 项目概述

## 基本信息

- **类型**：DSH skill 包（纯文档，无代码、无依赖、无构建）
- **安装形态**：目录放入 DSH skill 发现路径；或 npm 插件经 `dsh plugin add`
- **协议**：`SKILL.md`（中文）为权威；`SKILL.en.md` 为英文版；`template/` 为 Init 骨架

## 组成

| 文件 | 职责 |
|---|---|
| `skills/project-ai-docs/SKILL.md` | 协议本体（中文） |
| `skills/project-ai-docs/SKILL.en.md` | 协议英文版 |
| `skills/project-ai-docs/template/` (+`template.en/`) | Init 复制骨架（中/英，占位符仅此层） |
| `extensions/dsh/index.js` | DSH bundle 适配器：把 skills/ 注册为技能源 |
| `cordis.patch.yml` / `package.json` | bundle 注册 / npm 包清单 |
| `README.md` / `README.en.md` | 给人类用户的说明（中/英） |
| `AGENTS.md` | 项目级 agent 规则（英文，dogfood 协议） |
| `docs/.ai/` | 本包自身认知库（协议自述） |
| `LICENSE` | MIT |

## 关键功能

1. **协议**：8 条通用法则落地为三阶段流程（会话开始 / Init 生成 / 变更后回写）+ 五层分层表
2. **Init**：扫描项目信号 → 复制 template 骨架 → 实测填充 → 校验出处
3. **Dogfood**：本包自身用协议管理自己（AGENTS.md 强制）
4. **双语**：SKILL/README/template 各两版（中英分文件），AGENTS 单英文（agent 通用）；英文协议为替换式备用，命令与路径保持原样

## 维护入口

- 协议文本变更 → 改 `SKILL.md` 与 `SKILL.en.md`（同轮同步），校验 `template/` 说辞
- 用法变更 → 改 `README.md` 与 `README.en.md`
- 任何变更 → `docs/.ai/changelog.md` 顶部记账