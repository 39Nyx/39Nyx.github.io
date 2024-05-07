import { defineConfig } from 'dumi';

export default defineConfig({
  mfsu: false,
  outputPath: 'docs-dist',
  themeConfig: {
    name: ' ',
    logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
    lastUpdated: true,
    showLineNum: true,
    nav: [
      {
        title: '基础',
        link: '/basic',
        children: [
          { title: 'JavaScript', link: '/js' },
          { title: 'TypeScript', link: '/ts' },
          { title: '算法', link: '/algorithm/question/dynamic-programming' },
        ],
      },
      {
        title: '框架',
        link: '/framework',
        children: [
          { title: 'React', link: '/react' },
          { title: 'Vue', link: '/vue' },
          { title: 'Angular', link: '/angular' },
        ],
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
          { title: 'dUmi', link: '/d-umi' },
        ],
      },
      {
        title: '库',
        link: '/lib',
        children: [
          { title: 'ant design pro', link: '/ant' },
          { title: 'echarts', link: '/echarts' },
          { title: 'umi.js', link: '/umi' },
          { title: '拖拽', link: '/react-sortablejs/sortable' },
        ],
      },
      {
        title: '样例',
        link: '/components',
        children: [
          { title: 'ant', link: '/components/pro-layout' },
          { title: 'echarts', link: '/components/line-chart' },
        ],
      },
    ],
    github: 'https://github.com/hezhijian249/hezhijian249.github.io',
  },
  html2sketch: {},
  favicons: [
    'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
  ],
});
