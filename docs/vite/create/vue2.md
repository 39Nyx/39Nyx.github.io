---
title: Vue2
order: 1
group:
  title: 项目创建
  order: 2
---

## 手动创建项目

### 依赖安装

- 创建一个空的文件夹, 并在该文件夹下打开命令行, 执行`pnpm init`命令，创建`package.json`文件

- 安装`vite`和`@vitejs/plugin-vue2`依赖, 执行`pnpm add vite @vitejs/plugin-vue2 -D`

- 安装`vue2`和`vue-router`依赖, 执行`pnpm add vue@2.7.16 vue-router`

### 文件创建

- 在根目录下创建`index.html`文件, 并添加以下内容:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite App</title>
</head>
<body>
<div id="app"></div>
<script type="module" src="/src/main.js"></script>
</body>
</html>
```

- 在根目录下创建`src`文件夹, 在`src`目录下创建`main.js`文件, 并添加以下内容:

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
```

- 在`src`目录下创建`App.vue`文件, 并添加以下内容:

```vue
<script>
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped>
</style>
```

- 在`src`目录下下创建`router`文件夹，在`router`文件夹下创建`index.js`文件, 并添加以下内容:

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: []
})

export default router
```

- 在根目录下创建`vite.config.js`文件, 并添加以下内容:

```javascript
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue2()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
```

### 启动项目

- 在`package.json`文件中添加启动脚本

```json
{
  "scripts": {
    "dev": "vite"
  }
}
```

- 执行`pnpm dev`命令启动项目, 通过浏览器访问[http://localhost:5173/](http://localhost:5173/) 即可看到页面

### 集成eslint

- 安装`babel-eslint`, `eslint`, `eslint-plugin-vue`, `vue-eslint-parser`依赖, 执行`pnpm add babel-eslint@^10.0.2 eslint@^6.0.0 eslint-plugin-vue@^6.2.2 vue-eslint-parser@^7.0.0 -D`

- 安装`@babel/core`依赖, 执行`pnpm add @babel/core@^7.27.4`

- 在根目录下创建`.eslintrc.js`文件, 并添加以下内容:

```javascript
module.exports = {
    parser: "vue-eslint-parser", // 必须指定
    parserOptions: {
        parser: "babel-eslint", // 用于解析 JS 部分
        sourceType: "module",
    },
    extends: [
        "plugin:vue/recommended", // Vue 2 推荐规则
        "eslint:recommended"
    ],
    plugins: ["vue"],
    rules: {}
};
```

