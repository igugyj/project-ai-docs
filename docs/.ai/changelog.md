# 更新日志

本文件记录 project-ai-docs 的重要变更。新条目加在顶部。

---

## [2026-08-16]

### 主要变更

- 补全包结构
  - 新增 AGENTS.md：项目级 agent 规则，协议 dogfood 钉进仓库（进入先读 / 改动必回写 / 红线）
  - 新增 LICENSE：MIT
  - 新增 docs/.ai/core/ 三件套：project-overview、architecture、quick-start（满足协议 core 必读层）
  - README 结构树同步（加 AGENTS.md / LICENSE / docs/.ai）
  - 协议本体 SKILL.md 与 template/ 未动

- 安装方法落地真实路径
  - 确认 DSH 用户级技能根：`~/.dsh/skills`（dsh-skill-filesystem `USER_DSH_RANK`），watch 常驻即时生效
  - README 安装段改写为具体命令（Copy-Item / Remove-Item）；quick-start 同步

- 插件化改造（npm 包化）
  - 重排结构：SKILL.md + template/ 移入 `skills/project-ai-docs/`（技能发现要求 SKILL.md 位于子目录，与 Aegis 布局同构）
  - 新增 package.json（dsh.bundle.patch + peerDeps dsh-skill-filesystem）、cordis.patch.yml、extensions/dsh/index.js（provider 指向包内 skills/，照抄 Aegis 适配模式）
  - README/AGENTS/docs/.ai 同步新布局；安装拆 A（复制）/ B（dsh plugin add）两路

- 中英双语化 / Bilingualization
  - SKILL.md / README.md / AGENTS.md / docs/.ai 全套中英对照（命令与路径保持原样）
  - description 英文前置助全球 agent 路由；template/ 引导注释已双语
  - 模板内部占位符表保持语言中立（生成文档语言由目标项目决定）

- 双语改造升级：对照式 → 分文件式
  - README.md / README.en.md、AGENTS.md / AGENTS.en.md、SKILL.md（中文）/ SKILL.en.md（英文）
  - SKILL.en.md 为替换式备用：改名覆盖 SKILL.md 即用（frontmatter name 需同步改回 project-ai-docs）；位于 bundle 子目录，不参与技能发现
  - docs/.ai 退回纯中文；template 双语注释后改为分文件（见下条）
  - package.json files 补 README.en.md

- 新增 GitHub Action 手动发布（.github/workflows/publish.yml）
  - workflow_dispatch 触发，输入版本增量（patch 默认 / minor / major / 显式版本号）
  - 流程：npm version --no-git-tag-version → npm pack --dry-run 校验 → npm publish（NPM_TOKEN secret）→ bump commit + vX.Y.Z tag 回推
  - README 中英双双加「发布」小节

- template 分文件化
  - 撤掉 template/ 8 文件内的中英对照注释，回纯中文骨架
  - 新增 template.en/ 英文骨架全套 8 文件（index/changelog/core×3/_template×3）
  - SKILL.en.md §Init 指向 template.en/；中文协议仍用 template/
  - README/AGENTS/docs/.ai 同步「template 中英两套」说法

- AGENTS 单英文化
  - AGENTS.md 改纯英文（agent 通用规则），删除 AGENTS.en.md
  - 引用同步：README×2 / docs（index、overview、architecture）

- 新增 .gitignore（node_modules / *.tgz / *.log / .DS_Store / Thumbs.db）

- 新增 .gitattributes（语言分析）
  - `* text=auto` 行尾规范化
  - linguist-documentation：docs/.ai、README×2、AGENTS、SKILL×2、template×2 不计语言占比
  - 中英对应文件统一 linguist-documentation 防拆语言统计

## [初始化]

### 初始记录

- 对本项目应用自身协议（dogfood Init）
  - 项目实况：`SKILL.md` + `README.md` + `template/`，纯文档、无代码
  - 按「宁缺毋滥」原则：core/modules/config/best-practices 暂不建（无代码可写）
  - 关键约束写入 index.md 红线节