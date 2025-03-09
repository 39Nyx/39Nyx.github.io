import { defineConfig } from 'dumi';
import { nav } from './config/nav';

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
export default defineConfig({
  mfsu: false,
  outputPath: 'docs-dist',
  themeConfig: {
    name: ' ',
    logo: '/assets/images/AntDesign.png',
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
    `;(function(){
      let manifestLink = document.createElement('link');
      manifestLink.rel = 'manifest';
      manifestLink.href = '/manifest.json';
      document.head.appendChild(manifestLink);
    })()`,
    'window.EXCALIDRAW_ASSET_PATH = "https://registry.npmmirror.com/@excalidraw/excalidraw/0.17.6/files/dist/";',
    process.env.NODE_ENV !== 'development' ? `;(function () {
      if (!('serviceWorker' in navigator)) {
        console.log('Service workers not supported.')
        return
      }
      window.addEventListener('load', function () {
        var e = 'https://www.39nyx.cn/service-worker.js?v=${Date.now()}'
        navigator.serviceWorker
          .register(e)
          .then(function (n) {
            n.onupdatefound = function () {
              var e = n.installing
              e.onstatechange = function () {
                switch (e.state) {
                  case 'installed':
                    navigator.serviceWorker.controller
                      ? console.log('New or updated content is available.')
                      : console.log('Content is now available offline!')
                    break
                  case 'redundant':
                    console.error(
                      'The installing service worker became redundant.'
                    )
                }
              }
            }
          })
          .catch(function (e) {
            console.error('Error during service worker registration:', e)
          })
      })
    })()` : '',
  ],
  styles: [
    `/styles/global.css`
  ],
  codeSplitting: {
    jsStrategy: 'depPerChunk'
  },
  favicons: [
    '/assets/images/AntDesign.png'
  ],
  chainWebpack(memo) {
    memo.plugin('monaco').use(new MonacoWebpackPlugin());
    if (process.env.NODE_ENV !== 'development') {
      const {GenerateSW} = require('workbox-webpack-plugin')
      const pkg = require('./package.json')
      memo.plugin('workbox').use(GenerateSW, [
        {
          // 缓存版本：建议增加一种缓存版本标识符的设定，不一定是 pkg.name 和 version 一起的，可能是和你的基建环境变量或者 timestamp 等相关的，看你自己设定。
          cacheId: `${pkg.name}-${pkg.version}`,
          clientsClaim: true,
          skipWaiting: true,
          // 这里 exclude 的区别：通常来说 workbox 插件会自动识别 webpack 产物列表，然后自动添加产物的那些文件到 cache 列表中，你可以在 service-worker.js 这个产物中看到缓存文件列表，此时配 exclude: [/\.html/] 只排除 html 就行了。
          exclude: [/\.html/]
        }

      ])
    }
    return memo;
  },
  plugins: [
    require.resolve('./plugin/medium-zoom.ts')
  ]
});
