import { defineConfig } from 'dumi';
import { nav } from './config/nav';

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

export default defineConfig({
  mfsu: false,
  outputPath: 'docs-dist',
  themeConfig: {
    name: ' ',
    logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
    lastUpdated: true,
    showLineNum: true,
    nav: nav,
    github: 'https://github.com/39Nyx/39Nyx.github.io'
  },
  html2sketch: {},
  analytics: {
    ga_v2: 'G-Z3WZ2TPVNJ',
    baidu: '37f2470d412281b6e20b1ce407956d30'
  },
  headScripts: [
    'window.EXCALIDRAW_ASSET_PATH = "/draw/";'
  ],
  styles: [
    `/styles/global.css`
  ],
  favicons: [
    'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png'
  ],
  chainWebpack(memo) {
    memo.plugin('monaco').use(new MonacoWebpackPlugin());
    return memo;
  }
});
