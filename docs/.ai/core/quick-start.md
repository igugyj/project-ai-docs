# project-ai-docs 快速开始

## 环境要求

- **DeepSeek Harness (DSH)**：任意版本（skill 机制自 rc 系列起支持）
- 无运行时、无依赖、无构建

## 安装到 DSH

**A：复制（零依赖）**
1. 复制运行时单元：`skills/project-ai-docs/` → 用户级技能根 `~/.dsh/skills/project-ai-docs/`
2. 备用根：`~/.agents/skills/`、项目级 `<项目根>/.dsh/skills/`
3. filesystem provider 常驻监听，一般无需重启；未出现则重启 DSH

**B：dsh plugin（随 profile 管理）**
```bash
dsh plugin --profile web add file:本包根目录   # 本地验证
dsh plugin --profile web add project-ai-docs  # npm 发布后
```

验证：新会话 skill 目录出现 `project-ai-docs`（中文协议；英文协议按 README 替换式启用）。

## 对任意项目使用

| 触发 | 行为 |
|---|---|
| 新会话（项目内） | agent 读 `docs/.ai/index.md` + changelog 尾部，点读分层文档 |
| 说「初始化项目文档」/「/init」 | Init：扫描 → 建骨架 → 实测填充 → 校验 |
| 任务完成后 | 清冗余 → 回写 → changelog 记账 |

## 手动 Init（不靠 agent）

```bash
# 1. 复制骨架（中文协议用 `skills/project-ai-docs/template/`，英文协议用 `template.en/`）
cp -r skills/project-ai-docs/template/ <项目根>/docs/.ai/
# 2. 按 template 内注释填充（占位符 → 实测事实）
# 3. 校验：路径/版本/命令有出处；不确定标 TODO
```

## 常见问题

- **怎么让 agent 自动用？** 协议是 skill：新会话 agent 按 `description` 路由；AGENTS.md 可把规则钉进仓库（本项目即 dogfood 示例）
- **READ ME 还是 AGENTS.md？** 两者：README 给人，AGENTS.md 给 agent（人机分离法则）
- **中英协议选哪个？** 默认 `project-ai-docs`（中文）；要英文协议：`SKILL.en.md` 改名覆盖 `SKILL.md`（frontmatter name 同步改回 `project-ai-docs`）
- **文档太多怎么办？** 维护法则：常读薄、细节链源码、best-practices 只记稳定事实