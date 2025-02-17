---
title: 缓存机制
order: 3
---

## 缓存机制

`Vite` 默认会将依赖预构建的结果缓存到项目根目录下的 `.vite` 文件夹中。只要依赖的 `package.json` 内容或者 `lock` 文件（如 `package-lock.json`、`yarn.loc`k 等）没有发生变化，`Vite` 就会复用这些缓存，从而避免重复进行预构建

## 手动控制缓存

在 `vite.config.js` 或 `vite.config.ts` 中，你可以通过 `optimizeDeps` 选项来控制依赖预构建的行为，包括缓存相关的设置。

- **`force 选项`**：当 force 设为 true 时，Vite 会跳过缓存，强制重新进行依赖预构建。

```javascript
// vite.config.js
module.exports = {
  optimizeDeps: {
    force: true // 每次启动都强制重新预构建依赖
  }
};
```

或者在`Typescript`中：

```typescript
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    force: true
  }
});
```

- **`include`** 和 **`exclude`** 选项：可以指定哪些依赖需要进行预构建，哪些需要排除。合理配置这两个选项可以减少不必要的预构建操作，提高缓存利用率。

```javascript
// vite.config.js
module.exports = {
  optimizeDeps: {
    include: ['lodash'], // 明确指定需要预构建的依赖
    exclude: ['some-lightweight-dep'] // 排除不需要预构建的依赖
  }
};
```

可以只配置一个，一般配置`exclude`更为常见, 因为`include`默认会将所有依赖都进行预构建。

## 手动删除缓存

开发一个组件库，使用link包的方式调试，有时候更新包的内容，重新运行之后会报错，这个时候可以考虑手动删除`node_modules/.vite`文件夹。
