---
title: Preset Vue2
order: 1
group:
  title: 插件
  order: 2
---

## 安装

```shell [pnpm]
pnpm add @39nyx/dumi-plugin-preset-vue2
```

## 配置

在 `dumi.config.ts` 中引入插件：

```typescript
import { defineConfig } from 'dumi';

export default defineConfig({
  presets: ['@39nyx/dumi-plugin-preset-vue2'],
});
```

## 集成第三方组件库

集成`element-ui`组件库为例

在根目录创建`runtime`文件夹，在文件夹下创建`renderer.js`文件, 内容如下

```javascript
import Vue from 'vue';

// 集成ElementUI, 其他组件类似
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// 创建实例前配置全局错误处理
Vue.config.errorHandler = function (err, vm, info) {
  // 在此处理错误（如发送日志、抛给上层）
  console.error('Vue 错误:', err, info);

  // 如果需要抛给外部（如 React 错误边界）
  throw err; // 抛出错误让上层捕获
};

const renderer = async function (canvas, component) {
  if (component.__css__) {
    setTimeout(() => {
      document
        .querySelectorAll(`style[css-${component.__id__}]`)
        .forEach((el) => el.remove());
      document.head.insertAdjacentHTML(
        'beforeend',
        `<style css-${component.__id__}>${component.__css__}</style>`,
      );
    }, 1);
  }
  const app = new Vue(component)
  app.$mount(canvas);
  return () => {
    app.$destroy();
  };
};

export default renderer;
```

这里需要导出一个渲染函数, 是一定要实现的, 上面的`renderer`函数是一个通用实现，可以也可根据实际情况进行修改。

然后在`dumi.config.ts`中配置`runtime`路径

```typescript
import { defineConfig } from 'dumi';

export default defineConfig({
  presets: ['@39nyx/dumi-plugin-preset-vue2'],
  vue: {
    compiler: {
      // 配置创建好的渲染函数路径, 如果不配置，会使用默认提供的渲染函数
      rendererPath: 'runtime/renderer.js'
    }
  },
});
```
