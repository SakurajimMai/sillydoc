# VitePress 酒馆文档站 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将当前仓库整理成可本地构建、可推送到 GitHub、可由 Cloudflare Pages 自动部署的 VitePress 中文文档站。

**Architecture:** 使用 `docs/` 作为文档根目录，`docs/.vitepress/config.mts` 负责站点配置，原始 Markdown 内容迁移到 `docs/guide` 和 `docs/deploy`。仓库根目录补齐 `package.json`、`.gitignore` 和 `README.md`，以支持本地开发、GitHub 上传与 Cloudflare Pages 部署。

**Tech Stack:** Node.js 23, npm, VitePress, Git, Cloudflare Pages

---

### Task 1: 仓库初始化与包管理配置

**Files:**
- Create: `package.json`
- Create: `.gitignore`
- Modify: `README.md`

- [ ] **Step 1: 写出最小包配置**

```json
{
  "name": "silly-docs",
  "private": true,
  "type": "module",
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.6.3"
  }
}
```

- [ ] **Step 2: 写出忽略规则**

```gitignore
node_modules/
docs/.vitepress/dist/
.DS_Store
Thumbs.db
```

- [ ] **Step 3: 安装依赖**

Run: `cmd /c npm install`
Expected: 成功生成 `package-lock.json` 且安装 `vitepress`

- [ ] **Step 4: 初始化仓库说明**

```md
# silly 文档站

## 本地开发

```bash
cmd /c npm install
cmd /c npm run docs:dev
```

## 本地构建

```bash
cmd /c npm run docs:build
```
```

- [ ] **Step 5: 提交当前基础结构**

```bash
git add package.json package-lock.json .gitignore README.md
git commit -m "chore: bootstrap vitepress docs project"
```

### Task 2: VitePress 站点配置

**Files:**
- Create: `docs/.vitepress/config.mts`
- Create: `docs/index.md`

- [ ] **Step 1: 写出站点配置**

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '酒馆使用文档',
  description: '酒馆的安装、初始配置、提示词结构与部署说明',
  srcExclude: ['superpowers/**'],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '使用说明', link: '/guide/initial-overview' },
      { text: '部署', link: '/deploy/docker' }
    ],
    sidebar: [
      {
        text: '入门',
        items: [
          { text: '酒馆初始认识', link: '/guide/initial-overview' },
          { text: '酒馆初始使用', link: '/guide/initial-setup' },
          { text: '提示词结构', link: '/guide/prompt-structure' }
        ]
      },
      {
        text: '部署',
        items: [
          { text: 'Docker 部署', link: '/deploy/docker' }
        ]
      }
    ]
  }
})
```

- [ ] **Step 2: 写出首页**

```md
# 酒馆使用文档

面向酒馆使用者的中文说明文档，覆盖初始认识、环境配置、提示词结构和 Docker 部署。

## 快速开始

- [先了解界面与基本概念](/guide/initial-overview)
- [再完成环境配置与导入](/guide/initial-setup)
- [最后查看提示词结构说明](/guide/prompt-structure)
```

- [ ] **Step 3: 运行本地构建验证配置可用**

Run: `cmd /c npm run docs:build`
Expected: 成功输出到 `docs/.vitepress/dist`

- [ ] **Step 4: 提交站点骨架**

```bash
git add docs/.vitepress/config.mts docs/index.md
git commit -m "feat: add vitepress site config"
```

### Task 3: 迁移现有文档内容

**Files:**
- Create: `docs/guide/initial-overview.md`
- Create: `docs/guide/initial-setup.md`
- Create: `docs/guide/prompt-structure.md`
- Create: `docs/deploy/docker.md`

- [ ] **Step 1: 迁移“酒馆初始认识”**

```md
# 酒馆初始认识

<!-- 将现有内容整体迁移，并保留图片链接 -->
```

- [ ] **Step 2: 迁移“酒馆初始使用”**

```md
# 酒馆初始使用

<!-- 将现有内容整体迁移，并保留图片链接 -->
```

- [ ] **Step 3: 迁移“提示词结构”**

```md
# 提示词结构

<!-- 将现有内容整体迁移，并保留图片链接 -->
```

- [ ] **Step 4: 迁移“搭建部署”**

```md
# Docker 部署

<!-- 将现有内容整体迁移，并保留代码块 -->
```

- [ ] **Step 5: 再次运行构建**

Run: `cmd /c npm run docs:build`
Expected: 构建成功，所有文档路径可解析

- [ ] **Step 6: 提交内容迁移**

```bash
git add docs/guide docs/deploy
git commit -m "docs: migrate existing markdown content into vitepress"
```

### Task 4: GitHub 与 Cloudflare 部署说明

**Files:**
- Modify: `README.md`

- [ ] **Step 1: 补充 GitHub 推送步骤**

```md
## 推送到 GitHub

```bash
git init
git branch -M main
git add .
git commit -m "docs: initialize vitepress site"
git remote add origin <你的仓库地址>
git push -u origin main
```
```

- [ ] **Step 2: 补充 Cloudflare Pages 配置**

```md
## Cloudflare Pages 部署

- Framework preset: `None`
- Build command: `npm run docs:build`
- Build output directory: `docs/.vitepress/dist`
- Node.js version: `20`
```

- [ ] **Step 3: 运行最终构建验证**

Run: `cmd /c npm run docs:build`
Expected: 构建成功，生成静态产物

- [ ] **Step 4: 提交部署文档**

```bash
git add README.md
git commit -m "docs: add github and cloudflare deployment guide"
```
