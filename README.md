# project-ai-docs

通用项目 AI 文档协议 skill：每项目一份 `docs/.ai/` 认知库，agent 会话先读索引再动手、改动必回写，防上下文涣散、保项目认知精细。

英文版见 [README.en.md](README.en.md)。

## 通用法则

1. **地图先行** — `index.md` 唯一入口，全文档优先级路由表
2. **分层预算** — core/modules/config/best-practices 四层，显式优先级管 token 开销
3. **红线前置** — 硬约束（禁止项）放 index 最顶，先于一切技术信息
4. **点读代替全读** — 模块化文档，按任务只读相关切片
5. **写回闭环** — 任务结束 = 文档更新，知识沉淀在文档不靠会话记忆
6. **增量感知** — changelog 台账，新会话读尾部即知项目现状
7. **人机分离** — README 给用户，docs/.ai 给 agent
8. **事实可验** — 只写实测路径/版本/命令，不写猜测

## 内容

```
project-ai-docs/
├── skills/project-ai-docs/   # 运行时技能单元（DSH 插件式安装的发现根）
│   ├── SKILL.md              # 协议本体（中文）
│   ├── SKILL.en.md           # 协议英文版（替换式：改名覆盖 SKILL.md 即用）
│   ├── template/             # Init 骨架·中文（复制即用）
│   └── template.en/          # Init 骨架·英文
├── extensions/dsh/index.js   # DSH bundle 适配器（provider 指向 skills/）
├── cordis.patch.yml          # bundle 注册
├── package.json              # npm 包清单（dsh.bundle.patch）
├── AGENTS.md                 # 项目级 agent 规则（英文，agent 通用）
├── README.md                 # 本文件（中文）
├── README.en.md              # 英文说明
├── LICENSE                   # MIT
└── docs/.ai/                 # 本包自身的认知库（协议自述）
```

## 安装（DSH）

### A：复制到技能发现根（零依赖，免构建）

| 层级 | 路径 |
|---|---|
| 用户级（推荐） | `%USERPROFILE%\.dsh\skills\` |
| 全局 agents-home | `%USERPROFILE%\.agents\skills\` |
| 项目级 | `<项目根>\.dsh\skills\` 或 `<项目根>\.agents\skills\` |

```powershell
# 复制运行时技能单元（skills/project-ai-docs/ → ~/.dsh/skills/project-ai-docs/）
Copy-Item -Recurse D:\Desktop\project-ai-docs\skills\project-ai-docs "$env:USERPROFILE\.dsh\skills\project-ai-docs"
# 一般无需重启（watch 自动发现）；新会话未出现则重启 DSH 一次

# 卸载：删除目录即移除
Remove-Item -Recurse "$env:USERPROFILE\.dsh\skills\project-ai-docs"
```

### B：dsh plugin 安装（随 profile 管理）

```powershell
# 本地目录安装（验证用）
dsh plugin --profile web add file:D:\Desktop\project-ai-docs

# npm 发布后从 registry 安装
dsh plugin --profile web add project-ai-docs

# 更新 / 卸载
dsh plugin --profile web up project-ai-docs
dsh plugin --profile web rm project-ai-docs
```

> B 路利用包内 `dsh.bundle.patch` → `cordis.patch.yml` → `extensions/dsh/index.js`，把 `skills/` 树注册为 DSH 技能源（同 Aegis 做法）。装完重启 DSH 生效。

其他宿主（Claude Code / Codex 等）：复制 `skills/project-ai-docs/` 到各自 skills 路径即可。

## 使用

| 触发 | 行为 |
|---|---|
| 新会话开始 | 读 index + changelog，点读相关分层文档 |
| 「初始化项目文档」/「/init」 | Init 协议：扫描项目 → 建骨架 → 实测填充 |
| 任务完成后 | 清冗余 → 回写对应文档 → changelog 记账 |

## 给新项目的 Init 速查

```bash
# 1. 建骨架（agent 执行，或手动复制）
# 2. agent 扫描项目信号，按 SKILL.md §Init 填充
# 3. 校验所有路径/版本/命令有出处
```

## 发布（手动）

仓库已带 GitHub Action（`.github/workflows/publish.yml`），手动发布，版本增量可选：

1. 仓库 Settings → Secrets and variables → Actions → 新建 `NPM_TOKEN`（npm 账号 access token）
2. Actions 页 → **publish** → Run workflow → 填目标版本号 `x.y.z`（显式，如 0.1.1）
3. 流程：推进版本 → 查重（已发布则中止）→ `npm pack --dry-run` 校验包内容 → `npm publish` → 回写版本 commit + `vX.Y.Z` tag

无需本地 npm login / publish。