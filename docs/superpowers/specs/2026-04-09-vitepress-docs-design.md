# VitePress 酒馆文档站设计说明

## 目标

将当前仓库中的酒馆使用说明 Markdown 文档整理为一个基于 VitePress 的中文静态文档站，并为后续接入 GitHub 仓库与 Cloudflare Pages 自动部署做好标准化配置。

## 约束

- 站点采用 VitePress 官方推荐结构，文档根目录使用 `docs/`
- 站点部署在根路径，`base` 使用 `/`
- 保留现有文档内容，不做大规模重写，只做必要的标题与目录整理
- 仓库当前不是 Git 仓库，需要在本地初始化
- 站点应能通过 `npm run docs:build` 直接生成静态文件
- Cloudflare Pages 采用 Git 集成自动部署，构建输出目录为 `docs/.vitepress/dist`

## 信息架构

- `docs/index.md`
  - 站点首页
  - 提供快速入口、内容概览与部署说明入口
- `docs/guide/initial-overview.md`
  - 对应现有“酒馆初始认识”
- `docs/guide/initial-setup.md`
  - 对应现有“酒馆初始使用”
- `docs/guide/prompt-structure.md`
  - 对应现有“提示词结构”
- `docs/deploy/docker.md`
  - 对应现有“搭建部署”中的 Docker 部署说明
- `docs/.vitepress/config.mts`
  - 中文站点配置、导航、侧边栏、社交链接与搜索基础配置

## 技术方案

### 方案选择

采用官方最常见的 `docs/` 目录结构，并使用 npm 管理依赖。

### 原因

- 与 VitePress 官方文档一致，后续维护成本最低
- Cloudflare Pages 配置最直接
- 后续如需增加版本化、搜索、公告、主题定制，都可平滑扩展

## GitHub 与 Cloudflare 部署路径

1. 本地完成仓库初始化与站点文件落地
2. 安装依赖并验证 `npm run docs:build`
3. 将本地仓库推送到 GitHub
4. 在 Cloudflare Pages 中连接 GitHub 仓库
5. 使用以下配置创建项目
   - Production branch: `main`
   - Build command: `npm run docs:build`
   - Build output directory: `docs/.vitepress/dist`
   - Node.js version: `20`

## 风险与处理

- PowerShell 执行策略会拦截 `npm.ps1`
  - 处理方式：统一使用 `cmd /c npm ...`
- 当前缺少 GitHub CLI
  - 处理方式：先完成本地仓库与文档站搭建，远程仓库创建改为用户手动创建或后续补充远程地址
- Cloudflare 需要账号登录
  - 处理方式：优先生成可直接填写的 Pages 配置，若本机已有 `wrangler` 且可用，再尝试 CLI 辅助

## 完成标准

- 仓库包含可运行的 VitePress 站点
- 现有 4 篇文档已进入站点导航
- 本地构建成功
- README 中包含 GitHub 与 Cloudflare Pages 部署步骤
