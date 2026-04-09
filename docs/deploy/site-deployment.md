# 本站部署

本文说明如何把当前 VitePress 文档站推送到 GitHub，并部署到 Cloudflare Pages。

## 1. 本地安装依赖

Windows PowerShell 遇到脚本执行策略限制时，请使用：

```bash
cmd /c npm install
```

## 2. 本地预览文档站

```bash
cmd /c npm run docs:dev
```

默认开发地址一般为 `http://localhost:5173`。

## 3. 本地构建

```bash
cmd /c npm run docs:build
```

构建产物会生成到：

```text
docs/.vitepress/dist
```

## 4. 推送到 GitHub

先在 GitHub 上创建一个空仓库，然后在本地执行：

```bash
git init
git branch -M main
git add .
git commit -m "docs: initialize vitepress site"
git remote add origin <你的仓库地址>
git push -u origin main
```

如果当前目录已经初始化过 Git，只需要从 `git add .` 开始执行。

## 5. 在 Cloudflare Pages 中创建项目

进入 Cloudflare 控制台，打开 `Workers & Pages`，选择 `Create application` 或 `Create a project`，然后连接 GitHub 仓库。

推荐使用以下构建配置：

- Production branch: `main`
- Build command: `npm run docs:build`
- Build output directory: `docs/.vitepress/dist`
- Node.js version: `20`

如果界面没有自动识别 VitePress，直接手动填写上面的参数即可。

## 6. 自定义域名

部署成功后，可以在 Cloudflare Pages 的自定义域名设置中绑定自己的域名。由于当前站点部署在根路径，VitePress 的 `base` 保持 `/` 即可，不需要额外改成子路径。
