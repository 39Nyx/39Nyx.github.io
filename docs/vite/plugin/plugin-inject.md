---
title: Plugin Inject
order: 3
group:
  title: 插件
  order: 4
---

在使用lodash的时候，如果不想单独导入lodash的每个方法，可以使用`@rollup/plugin-inject`插件来自动导入全局变量，然后通过这个全局变量来调用lodash的方法。

## 安装

:::code-group

```shell [pnpm]
pnpm install @rollup/plugin-inject -D
```

```shell [yarn]
yarn add @rollup/plugin-inject -D
```

```shell [npm]
npm install @rollup/plugin-inject --save-dev
```

:::

## 配置

```javascript
import { defineConfig } from 'vite'
import inject from '@originjs/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      _: 'lodash-es'
    })
  ]
})
```

## 使用

```javascript
// 可以直接使用_变量调用lodash的方法
_.map([1, 2, 3], (n) => n * 2) // [2, 4, 6]
```
