# {项目名} AI 上下文文档索引

## ⚠️ 必须遵守的原则（红线）

<!-- 硬约束前置：先于一切技术信息。每个项目按实测填写。示例：
1. 纯静态导出，禁 API 路由（app/api/），禁 searchParams（除非配合 generateStaticParams）
2. 所有数据从 Markdown 读取，评论用第三方服务（如 Giscus）
3. 任务完成后必须：清理冗余 + 更新对应文档 + 写 changelog
-->

## 项目类型

<!-- 一句话定位：这是什么项目、用什么技术。示例：静态博客，Next.js App Router + TypeScript + Tailwind -->

## 文档结构（按优先级从高到低）

### 核心文档（必读）

| 文档路径 | 优先级 | 内容描述 |
|---|---|---|
| [core/project-overview.md](./core/project-overview.md) | 1 | 项目概述、技术栈、目录结构、关键功能 |
| [core/architecture.md](./core/architecture.md) | 2 | 架构设计、数据流、路由、性能 |
| [core/quick-start.md](./core/quick-start.md) | 3 | 环境要求、实测命令、开发流程 |

### 变更台账（每次会话开头读）

| 文档路径 | 优先级 | 内容描述 |
|---|---|---|
| [changelog.md](./changelog.md) | 0 | 最新变更记录，了解项目现状 |

### 模块文档（按任务点读）

<!-- 每模块一行，按实际业务填写 -->
| 文档路径 | 优先级 | 内容描述 |
|---|---|---|
| [modules/xxx.md](./modules/xxx.md) | 4 | xxx 模块职责、关键文件、数据流 |

### 配置文档（按需参考）

| 文档路径 | 优先级 | 内容描述 |
|---|---|---|
| [config/xxx.md](./config/xxx.md) | 按需 | xxx 配置项详解 |

### 最佳实践（参考级）

| 文档路径 | 优先级 | 内容描述 |
|---|---|---|
| [best-practices/development.md](./best-practices/development.md) | 参考 | 开发规范与踩坑 |
| [best-practices/deployment.md](./best-practices/deployment.md) | 参考 | 部署与 CI/CD |

## 读取建议

1. changelog 尾部最新条目 → 项目现状
2. core/ 三篇 → 理解底座
3. 按任务点读 modules/、config/
4. 规范类 best-practices/ 按需查

## 文档更新规则

- 结构变化 → project-overview.md
- 架构变化 → architecture.md
- 模块增改 → 对应 modules/*.md
- 配置变化 → 对应 config/*.md
- **每次任务完成后必须更新 changelog.md，记录本次变更**

## 关键路径

<!-- 实测填写：根目录、源码目录、内容目录、关键文件及用途 -->