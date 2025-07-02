---
title: Vue2库
order: 1
group:
  title: 打包和构建
  order: 3
---

# Vue2库

## es打包模式

```javascript
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    vue2Jsx()
  ],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'ViteLibVue2',
      fileName: () => 'vite-lib-vue2.es.js',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', 'axios'],
      output: {
        globals: {
          vue: 'Vue',
          axios: 'axios'
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
        dir: 'dist/es',
        format: 'es',
        entryFileNames: '[name].js'
      }
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vite-lib-vue2': fileURLToPath(new URL('./src/index.js', import.meta.url))
    }
  }
})

```

## umd打包模式

```javascript
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    vue2Jsx()
  ],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'ViteLibVue2',
      fileName: () => 'vite-lib-vue2.umd.js',
      formats: ['umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        dir: 'dist/umd'
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

### build.lib

- **entry**: 入口文件路径

- **name**: 全局变量名, 在`script`标签引入脚本的时候，组件声明的全局变量名

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<script src="./dist/vite-lib-vue2.umd.js"></script>

<script>
  // 可以看到在index.js文件中导出的内容
  console.log(ViteLibVue2)
</script>
</body>
</html>
```

- **fineName**: 输出文件的名称，可以是一个函数，返回文件名, 也可以是一个字符串，直接指定文件名

- **formats**: 输出格式，可以是`es`、`cjs`、`umd`、`iife`等

### rollupOptions

- **external**: 外部依赖，打包时排除依赖

- **output.globals**: 全局变量，将依赖的模块注入到输出文件中

`globals`的配置规则需要根据外部依赖的模块名来配置，比如`vue`模块的全局变量名为`Vue`，`lodash`模块的全局变量名为`_`，那么`globals`的配置如下：

```javascript
output: {
  globals: {
    vue: 'Vue',
    lodash: '_'
  }
}
```

全局变量就是在`script`标签通过`src`引入脚本的时候，脚本提供的全局变量，这个全局变量需要保持一致，否则会报错。

- **output.dir**: 输出目录
