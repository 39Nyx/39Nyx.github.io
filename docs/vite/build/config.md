---
title: 配置
order: 1
group:
  title: 打包和构建
---

## 提升 Node.js 内存限制

在打包出新内存溢出时候将最大内存限制设置为 6GB，临时解决方案

```json
{
  "scripts": {
    "build": "node --max-old-space-size=6144 ./node_modules/vite/bin/vite.js build"
  }
}
```

## build

```javascript
export default {
  build: {
    sourcemap: false, // 禁用 sourcemap 生成
    target: 'esnext', // 避免低版本转码开销
    minify: 'terser', // 启用压缩（需更多 CPU 而非内存）
    chunkSizeWarningLimit: 2000, // 调高 chunk 大小警告阈值（默认 500KB）
    terserOptions: {
      compress: {
        drop_console: true // 移除 console.log
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => { // 手动代码分割
          // 将 monaco-editor 和 node_modules 打包到 vendor chunk
          if (id.includes('monaco-editor')) {
            return 'monaco-editor'
          } else if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
}
```

## 启用 PostCSS 插件

- 安装 PostCSS 嵌套插件

:::code-group

```shell [pnpm]
pnpm add -D postcss postcss-nesting
```

```shell [npm]
npm install -D postcss postcss-nesting
```

```shell [yarn]
yarn add -D postcss postcss-nesting
```

:::

- 在 postcss.config.js 中配置

```javascript
module.exports = {
  plugins: {
    'postcss-nesting': {},  // 自动转换嵌套语法
    'autoprefixer': {}      // 可选：自动加前缀
  }
}
```
