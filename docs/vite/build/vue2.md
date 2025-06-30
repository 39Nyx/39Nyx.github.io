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
