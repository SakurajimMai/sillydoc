# 酒馆使用文档站

这是一个基于 [VitePress](https://vitepress.dev/zh/) 构建的中文静态文档站，用来整理酒馆的初始认识、环境配置、提示词结构和部署说明。

## 环境要求

- Node.js `20+`
- npm `10+`
- Git

## 本地开发

Windows PowerShell 下如果遇到脚本执行策略限制，请统一使用 `cmd /c npm ...`。

```bash
cmd /c npm install
cmd /c npm run docs:dev
```

默认开发地址一般为 `http://localhost:5173`。

## 本地构建

```bash
cmd /c npm run docs:build
```

构建输出目录：

```text
docs/.vitepress/dist
```

## 项目结构

```text
.
├─ docs/
│  ├─ .vitepress/
│  │  └─ config.mts
│  ├─ deploy/
│  ├─ guide/
│  └─ index.md
├─ package.json
└─ README.md
```

## 推送到 GitHub

先在 GitHub 上手动创建一个空仓库，然后在本地执行：

```bash
git init
git branch -M main
git add .
git commit -m "docs: initialize vitepress site"
git remote add origin <你的仓库地址>
git push -u origin main
```

如果当前目录已经执行过 `git init`，从 `git add .` 开始即可。

## Cloudflare Pages 部署

进入 Cloudflare Pages，选择连接 Git 仓库，然后填写以下配置：

- Production branch: `main`
- Build command: `npm run docs:build`
- Build output directory: `docs/.vitepress/dist`
- Node.js version: `20`

Cloudflare Pages 的界面如果没有识别到 VitePress，可直接手动填写上面的构建配置。

## 文档入口

- 首页：`docs/index.md`
- 酒馆初始认识：`docs/guide/initial-overview.md`
- 酒馆初始使用：`docs/guide/initial-setup.md`
- 提示词结构：`docs/guide/prompt-structure.md`
- Docker 部署：`docs/deploy/docker.md`
- 本站部署：`docs/deploy/site-deployment.md`
