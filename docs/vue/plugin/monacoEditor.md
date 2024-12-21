---
title: Monaco Editor
order: 7
group:
  title: 插件
  order: 2
---

## 集成Monaco Editor

### 安装依赖

```shell
pnpm add monaco-editor
```

### 使用

```vue
<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';

import { editor } from 'monaco-editor';

type IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

const container: Ref<HTMLDivElement | null> = ref(null);

let myEditor: IStandaloneCodeEditor | null = null;

const codeValue = `function hello() {
\talert('Hello world!');
}
`;

onMounted(() => {
  if (container.value) {
    myEditor = editor.create(container.value, {
      value: codeValue,
      language: 'javascript',
      automaticLayout: true
    });
  }
});
</script>

<template>
  <div ref="container" class="h-full w-full"></div>
</template>

<style scoped></style>
```

这样基本上就可以使用了，不过虽然可以正常使用，但是在控制台会报错

```html
network.js:225 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'toUrl')
    at _FileAccessImpl.toUri (network.js:225:40)
    at _FileAccessImpl.asBrowserUri (network.js:174:26)
    at editorSimpleWorker.js:322:40
    at new Promise (<anonymous>)
    at EditorSimpleWorker.$loadForeignModule (editorSimpleWorker.js:313:16)
    at standaloneWebWorker.js:44:30
    at async tsMode.js:84:16
    at async WorkerManager.getLanguageServiceWorker (tsMode.js:90:20)
    at async DiagnosticsAdapter._doValidate (tsMode.js:380:20)
```

虽然这个不影响使用，但是控制台还是总是要打开看的，一直有这个报错也挺烦的，还好`monaco-editor`官方给出了解决方法
[https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#using-vite](https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#using-vite)
给的是一个`js`版本的，虽然我使用的是`ts`，只要稍微改一下就可以了

在`src/lib`下新建一个`monaco.ts`文件, 内容如下

```typescript
import * as originMonaco from 'monaco-editor';
// eslint-disable-next-line no-restricted-globals
self.MonacoEnvironment = {
  getWorker(_workerId: any, label: string) {
    const getWorkerModule = (moduleUrl: string, label: string) => {
      // eslint-disable-next-line no-restricted-globals
      const scriptURL = self.MonacoEnvironment?.getWorkerUrl?.(
        moduleUrl,
        label,
      ) as unknown as string;
      return new Worker(scriptURL || moduleUrl, {
        name: label,
        type: 'module',
      });
    };

    switch (label) {
      case 'css':
      case 'less':
      case 'scss': {
        return getWorkerModule(
          '/monaco-editor/esm/vs/language/css/css.worker.js?worker',
          label,
        );
      }
      case 'handlebars':
      case 'html':
      case 'razor': {
        return getWorkerModule(
          '/monaco-editor/esm/vs/language/html/html.worker.js?worker',
          label,
        );
      }
      case 'javascript':
      case 'typescript': {
        return getWorkerModule(
          '/monaco-editor/esm/vs/language/typescript/ts.worker.js?worker',
          label,
        );
      }
      case 'json': {
        return getWorkerModule(
          '/monaco-editor/esm/vs/language/json/json.worker.js?worker',
          label,
        );
      }
      default: {
        return getWorkerModule(
          '/monaco-editor/esm/vs/editor/editor.worker.js?worker',
          label,
        );
      }
    }
  },
};

const monaco: typeof originMonaco = originMonaco;

export { monaco };
```

然后在使用的时候引入这个文件即可

```vue
<script setup lang="ts">
  // 用lib下的monaco
  import { monaco } from '@/src/lib/monaco';
  onMounted(() => {
    if (container.value) {
      myEditor = monaco.editor.create(container.value, {
        value: codeValue,
        language: 'javascript',
        automaticLayout: true
      });
    }
  });
</script>
```

然后在看一下，不出意外的报了另外一个错误

```html
Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq
undefined
```

从`Network`里面可以看到请求了`/monaco-editor/esm/vs/editor/editor.worker.js?worker`和`/monaco-editor/esm/vs/language/typescript/ts.worker.js?worker`这两个文件，但是都`404`了

现在要解决这个问题，最简单的方法就是将`monaco-editor`放到`public`目录下，将`node_modules/monaco-editor`复制到`public`目录下，现在不控制台不报错了，但是缺点就是`public`的体积会非常大，多了一千4百多个文件

直接放到`public`目录这个方法还是不怎么推荐的, 反正只要可以访问到文件就可以了的话，并且这个是我的个人项目，所以就直接使用`https://registry.npmmirror.com`上面的资源了

更改`vite.config.ts`， 将`monaco-editor`的请求代理到`https://registry.npmmirror.com/monaco-editor/0.52.2/files/`

```typescript
export default defineConfig({
  server: {
    proxy: {
      '/monaco-editor': {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/monaco-editor/, ''),
        target:
          'https://registry.npmmirror.com/monaco-editor/0.52.2/files/',
      },
    }
  }
})
```

这样也解决了控制台报错的问题
