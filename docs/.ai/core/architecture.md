# project-ai-docs 架构

## 架构概览

纯文档 skill 包，三层职责分离：

```
协议层   skills/project-ai-docs/SKILL.md（+SKILL.en.md）
模板层   skills/project-ai-docs/template/ + template.en/ — Init 骨架（中/英，占位符在此层）
自述层   README(+en) + docs/.ai           — 给用户/agent 看本包自身是什么
分发层   package.json + cordis.patch.yml + extensions/dsh/index.js
                                          — npm 包 + DSH bundle 适配（provider 指向 skills/）
```

`AGENTS.md`（英文）把协议层强制为项目规则，形成 dogfood 闭环。

## 发现流（插件式安装）

```
dsh plugin add project-ai-docs
  → bundle manifest (package.json dsh.bundle.patch)
  → cordis.patch.yml insert
  → extensions/dsh/index.js apply(ctx)
  → applyFilesystemProvider({ bundledSkillDir: <包>/skills, watch: false })
  → ctx.skills 注册：project-ai-docs（中文协议；SKILL.en.md 位于 bundle 子目录，不参与发现，替换式使用）
```

## 数据流（Init 流程）

```
用户「初始化项目文档」/「/init」
  → 扫描项目信号（README/包清单/源码目录/配置/CI）
  → 复制 template/（中）或 template.en/（英）→ docs/.ai/
  → 按 SKILL.md §Init 填充（实测事实，禁编造）
  → 校验路径/版本/命令出处
  → changelog 记首条
```

## 变更流

```
任务完成 → 清冗余 → 按类型回写（协议文本→SKILL.md+SKILL.en.md / 用法→README / 骨架→template）
        → docs/.ai/changelog.md 顶部记账
```

## 关键约束

- template/ 分层与 SKILL.md 分层表一字不差
- 唯一含占位符的层级是 template/
- 本包无 modules/config/best-practices（无代码可写，宁缺毋滥）
- 通用化：不引用任何来源项目名
- 双语同步：中英协议文件同轮更新，命令/路径/文件名保持原样