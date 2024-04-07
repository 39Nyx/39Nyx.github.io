import { defineConfig } from 'dumi';

export default defineConfig({
  mfsu: false,
  outputPath: 'docs-dist',
  favicons: ['https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png'],
  themeConfig: {
    lastUpdated: true,
    title: '学习笔记',
    description: '不积跬步无以至千里，不积小流无以成江海。',
    rtl: false,
    nav: [
      { title: '指南', link: '/guide/introduce' },
      {
        title: '基础',
        link: '/basic',
        children: [
          { title: 'JavaScript', link: '/js' },
          { title: 'TypeScript', link: '/ts' }
        ]
      },
      {
        title: '框架',
        link: '/framework',
        children: [
          { title: 'React', link: '/react' },
          { title: 'Vue', link: '/vue' },
          { title: 'Angular', link: '/angular' }
        ]
      },
      {
        title: '工具',
        link: '/tools',
        children: [
          { title: 'Git', link: '/git' },
          { title: 'Webstorm', link: '/webstorm' },
          { title: 'npm', link: '/npm' },
          { title: 'yarn', link: '/yarn' },
          { title: 'pnpm', link: '/pnpm' },
          { title: 'dUmi', link: '/d-umi' }
        ]
      },
      {
        title: '库',
        link: '/lib',
        children: [
          { title: 'ant design pro', link: '/ant' }
        ]
      },
      { title: '样例', link: '/components' }
    ],
    github: 'https://github.com/hezhijian249/hezhijian249.github.io',
    footer: 'Made with <span style="color: rgb(255, 255, 255);">❤</span> by <div>开源学习笔记</div>',
    sidebarGroupModePath: ['/d-umi'],
    actions: [
      {
        type: 'primary',
        text: '快速开始',
        link: '/guide/introduce'
      }
    ],
    features: [
      {
        title: '内置全文搜索',
        details:
          '不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加。'
      },
      {
        title: '更好的编译性能',
        details:
          '通过结合使用 Umi 4 MFSU、esbuild、SWC、持久缓存等方案，带来比 dumi 1.x 更快的编译速度。'
      },
      {
        title: 'SSR',
        details: '全面支持 SSR，让文档具有更好的首屏加载速度、更好的SEO效果、更快的内容到达率。'
      },
      {
        title: '样式风格统一',
        details:
          '基于 antd 5.0 CSS-in-JS 样式加持，全面统一 dumi 内置样式，同时支持自定义主题加载。'
      },
      {
        title: '功能增强',
        details:
          '在 dumi 内置 markdown 增强基础上新增特有 FrontMatter 配置，并且内置多种组件，使文档展示效果得以提升。'
      },
      {
        title: '开箱即用',
        details: '接入简单，安装即使用，全面融入 Ant Design 风格，内置主题切换，紧凑模式等功能。'
      }
    ],
    footerLinks: [
      {
        title: '相关资源',
        items: [
          {
            title: 'dumi',
            description: '组件/文档研发工具',
            url: 'https://d.umijs.org',
            openExternal: true
          },
          {
            title: 'Ant Design',
            url: 'https://ant.design',
            openExternal: true
          },
          {
            title: 'Umi',
            description: 'React 应用开发框架',
            url: 'https://umijs.org',
            openExternal: true
          }
        ]
      },
      {
        title: '帮助',
        items: [
          {
            icon: 'https://github-production-user-asset-6210df.s3.amazonaws.com/20694238/256181695-b05fa72a-4ab5-479d-bb74-3d723755de47.png',
            title: 'GitHub',
            url: 'https://github.com/KuangPF/dumi-theme-antd',
            openExternal: true
          }
        ]
      },
      {
        title: '更多产品',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        items: [
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
            title: '语雀',
            url: 'https://yuque.com',
            description: '构建你的数字花园',
            openExternal: true
          }
        ]
      }
    ]
  }
});
