# 酒馆使用文档站

这是一个基于 [VitePress](https://vitepress.dev/zh/) 构建的中文静态文档站，用来整理酒馆的初始认识、环境配置、提示词结构和部署说明。

## 环境要求

- Node.js `20+`
- npm `10+`
- Git

## 本地开发

Windows PowerShell 下如果遇到脚本执行策略限制，请统一使用 `cmd /c npm ...`。

### 1. 安装依赖

```bash
cmd /c npm install
```

### 2. 启动本地预览服务

```bash
cmd /c npm run docs:dev
```

### 3. 在浏览器中查看

启动后，终端会输出一个本地访问地址，通常是：

```text
http://localhost:5173/
```

如果 `5173` 端口已被占用，VitePress 会自动切换到别的端口，请以终端实际输出的地址为准。

打开浏览器访问该地址后，可以重点检查：

- 首页是否正常显示
- 顶部导航是否可点击
- 左侧侧边栏是否正常展开
- 文档图片、链接和 Markdown 排版是否正常

### 4. 修改文档后观察热更新

本地开发服务启动后，修改 `docs/` 下的 Markdown 或 `docs/.vitepress/config.mts`，保存文件后浏览器会自动刷新。  
这一步适合用来检查导航、侧边栏、首页文案和文档内容是否符合预期。

### 5. 停止本地服务

在当前终端按 `Ctrl + C` 即可停止 `docs:dev` 服务。

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
