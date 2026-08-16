---
name: project-ai-docs
description: 通用项目 AI 文档协议（docs/.ai）。会话开始先读索引与变更日志再动手，改动必须回写文档，防上下文涣散、保项目认知精细。「初始化项目文档 / 生成 AI 文档 / /init」触发 Init 协议。适用任何语言/框架的项目。英文协议见 SKILL.en.md（name: project-ai-docs-en）。
---

# Project AI Docs 协议

约定：`<项目根>/docs/.ai/` 存项目稳定知识。会话记忆会散，文档不会。

## 会话开始

1. 读 `index.md` + `changelog.md` 尾部
2. 无 `docs/.ai` → 询问用户是否 Init（已要求则直接执行）
3. 按任务点读分层文档（见分层表），禁止整库探索

## Init（从 0 生成）

触发：用户说「初始化项目文档」「生成 AI 文档」「/init」，或会话开始第 2 条确认后。

1. **扫描**：README、包清单（按语言：package.json / pyproject.toml / go.mod / Cargo.toml）、源码目录、配置文件、构建与 CI、测试框架
2. **建骨架**：复制本 skill 的 `template/` → `docs/.ai/`
3. **填充**：
   - `index.md`：一句话定位 → 红线 → 分层路由表
   - `core/`：project-overview（是什么/技术栈/结构）、architecture（分层/数据流/路由）、quick-start（实测命令）
   - `modules/`：每业务模块一卡（职责、关键文件、数据流）
   - `config/`：每主配置一文件
   - `best-practices/`：开发/部署/命名/性能（从实测代码归纳）
   - `changelog.md`：首条初始化记录
4. **铁律**：只写实测事实，禁止编造；不确定标 `TODO: 待验证`
5. **校验**：路径/版本/命令必须有出处；无出处删或标 TODO

## 变更后

1. **清冗余**（文件/模块/依赖/目录）
2. **回写**对应文档：结构→overview；架构→architecture；模块→模块卡；配置→config；新坑→best-practices
3. **记账**：`changelog.md` 顶部追加：日期 + 改了什么 + 为什么 + 关键细节

**不写**：临时代码、小修、还在试装的依赖。

## 维护

- 常读文档薄；细节链源码（给路径），不复制代码
- best-practices 与代码规范分离，只记稳定事实
- README 给用户，docs/.ai 给 agent（人机分离）
- 发现文档与代码不一致 → 本次任务内修正

## 分层

| 层 | 目录 | 何时读 |
|---|---|---|
| 台账 | `changelog.md` | 每次会话开头（尾部最新） |
| 核心 | `core/` | 每次会话开头 / 理解项目 |
| 模块 | `modules/` | 任务涉及该模块时 |
| 配置 | `config/` | 遇到配置问题时 |
| 规范 | `best-practices/` | 开发、优化、部署时 |

读取序：changelog 尾部（项目现状）→ core（底座）→ 按任务点读 modules/config → 规范按需。