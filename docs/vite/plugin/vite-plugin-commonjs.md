---
title: vite-plugin-commonjs
order: 4
group:
  title: 插件
---

Vite 默认使用 ES 模块 (ESM) 规范, 在使用某些库的时候,这个库使用的是commonJs规范,这个时候会出现一些问题, 可以使用 `vite-plugin-commonjs` 插件来解决

## 安装插件

:::code-group
```shell [pnpm]
pnpm add @originjs/vite-plugin-commonjs -D
```

```shell [yarn]
yarn add @originjs/vite-plugin-commonjs -D
```

```shell [npm]
npm install @originjs/vite-plugin-commonjs --save-dev
```
:::

## 使用插件

```javascript
import { defineConfig } from 'vite'
import commonjs from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    vue2Jsx(),
    commonjs.viteCommonjs({
      // 指定需要转换的模块, 例如 crypto-js
      include: [
        'crypto-js'
      ]
    })
  ]
})

```
