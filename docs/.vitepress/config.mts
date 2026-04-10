import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '酒馆使用文档',
  description: '酒馆的初始认识、环境配置、提示词结构与部署说明',
  base: '/',
  cleanUrls: true,
  srcExclude: ['superpowers/**'],
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '使用说明', link: '/guide/initial-overview' },
      { text: '部署', link: '/deploy/docker' },
      {
        text: '云酒馆导航',
        link: 'https://www.991314.xyz',
        target: '_blank',
        rel: 'noreferrer'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '使用说明',
          items: [
            { text: '酒馆初始认识', link: '/guide/initial-overview' },
            { text: '酒馆初始使用', link: '/guide/initial-setup' },
            { text: '提示词结构', link: '/guide/prompt-structure' }
          ]
        }
      ],
      '/deploy/': [
        {
          text: '部署',
          items: [
            { text: 'Docker 部署', link: '/deploy/docker' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026'
    }
  }
})
