---
title: 组件库
order: 10
group:
  title: 基础
---
 
## 项目创建

使用`create-vue`创建一个vue2项目

```shell
npm create vue@legacy
```

创建好项目之后执行`pnpm install`安装依赖

创建`pnpm-workspace.yaml`文件,文件内容如下：

```yaml
packages:
  - packages/*
  - apps/*
```

在项目根目录创建`apps`和`packages`文件夹，分别用来存放应用和组件库。

## 组件库创建

在`packages`文件夹下创建`shared-utils`和`ui-components`文件夹，分别用来存放工具函数和组件库。

然后让分别创建`src/index.js`文件和`package.json`文件

目录结构如下：

```shell
packages
├── shared-utils
│   ├── src
│   │   └── index.js
│   └── package.json
└── ui-components
    ├── src
    │   └── index.js
    └── package.json
```

:::code-group

```json [shared-utils/package.json]
{
  "name": "@39nyx/shared-utils",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "vite build"
  },
  "private": true
}
```

```json [ui-components/package.json]
{
  "name": "@39nyx/ui-components",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "module": "lib/es/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "vite build"
  },
  "private": true
}
```
:::

## 案例项目创建

在`apps`文件夹下创建`examples`文件夹，然后将执行`npm create vue@legacy`项目创建的`src`、`public`、`index.html`、`vite.config.js`文件移动到`examples`文件夹下, 注意移动的时候注意文件的路径引用别错位了。

然后新建在`examples`文件夹下创建`package.json`文件, 内容如下:

```json
{
  "name": "examples",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite build && vite preview --port 4173",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore"
  },
  "dependencies": {
  }
}
```

将之前创建的`shared-utils`和`ui-components`作为库添加到`examples`中, 执行如下命令:

```shell
pnpm --filter examples add @39nyx/shared-utils --workspace
pnpm --filter examples add @39nyx/ui-components --workspace
```

更改更目录下的`package.json`文件，添加运行`examples`项目的命令

```json
{
  "name": "monorepo-vite-vue2",
  "version": "0.0.0",
  "scripts": {
    "dev:examples": "pnpm --filter examples dev"
  }
}
```

然后执行`pnpm dev:examples`命令运行`examples`项目。

## 组件库开发

在`ui-components/src/components`新建`button/index.vue`文件, 内容如下:

```vue
<script>
export default {
  name: 'MyButton',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<template>
  <button>
    <span class="text" @click="handleClick">
      <slot v-if="!text"></slot>
      <template v-else>{{ text }}</template>
    </span>
  </button>
</template>

<style scoped>
button {
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-size: 18px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
}

button:active,
button:hover {
  outline: 0;
}

button span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

button:hover span {
  background: none;
}

button:active {
  transform: scale(0.9);
}
</style>
```

在`ui-components/src/components/index.js`文件中导出组件

```javascript
import MyButton from './button/index.vue'

export {
  MyButton
}
```

在`ui-components/src/index.js`文件中导出`components`文件夹下所有组件


```javascript
export * from './components/index'
```

目录结构如下:

```shell
ui-components
├── src
│   ├── components                # 存放封装的组件
│   │   ├── button                # 存放button组件
│   │   │   └── index.vue
│   │   └── index.js              # 导出components文件下所有组件
│   ├── index.js                  # 提供外部引用的入口文件, 导出components文件夹下所有组件, 如果有其他的比如utils文件夹, 也可以在这里导出
│   └── package.json
```

## 共享库开发

在`shared-utils/src/utils`新建`sum.js`文件, 提供一个简单的求和函数, 内容如下:

```javascript
export function sum(a, b) {
  return a + b;
}
```

在`shared-utils/src/utils/index.js`文件中导出`utils`文件夹下所有函数

```javascript
export * from './sum'
// 如果有其他的比如is.js, 也可以在这里导出
```

在`shared-utils/src/index.js`文件中导出`utils`文件夹下所有函数

```javascript
export * from './utils/index'
```

目录结构如下:

```shell
shared-utils
├── src
│   ├── utils                     # 存放工具函数
│   │   ├── sum.js                # 存放求和函数
│   │   └── index.js              # 导出utils文件夹下所有函数
│   ├── index.js                  # 提供外部引用的入口文件, 导出utils文件夹下所有函数
│   └── package.json
```

## 使用测试

在这里使用的还是源码，如果需要使用组件库编译后的内容，可以查看[组件库打包](/vue2/basic/library#组件库打包)

在`examples`中编写`vue`文件进行测试

```vue
<script setup>
import { computed, ref } from 'vue'
import { sum } from '@39nyx/shared-utils'
import { MyButton } from '@39nyx/ui-components'

const count1 = ref(0)
const count2 = ref(0)

const result = computed(() => {
  return sum(count1.value, count2.value)
})
</script>

<template>
  <div>
    <div>
      <my-button @click="count1++">Increment count1 = {{ count1 }}</my-button>
    </div>
    <div>
      <my-button @click="count2++">Increment count2 = {{ count2 }}</my-button>
    </div>
    <div>
      结果: {{ result }}
    </div>
  </div>
</template>
```

## 组件库打包

在`ui-components`文件夹下添加`vite.config.js`文件, 内容如下:

```javascript
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'

export default defineConfig({
  plugins: [
    vue2(),
    vue2Jsx()
  ],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'UiComponents',
      fileName: () => `index.es.js`,
      formats: ['es']
    },
    cssTarget: ['chrome112'],
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue'
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
        dir: 'lib/es',
        format: 'es',
        // 入口文件规则
        entryFileNames: '[name].js'
      }
    }
  }
})
```

在`ui-components/package.json`添加打包脚本命令

```json
{
  "name": "@39nyx/ui-components",
  "scripts": {
    "build": "vite build"
  }
}
```

在根目录的`package.json`文件中添加打包命令

```json
{
  "name": "monorepo-vite-vue2",
  "scripts": {
    "build:lib": "pnpm --filter @39nyx/* run build"
  }
}
```

执行`pnpm build:lib`命令进行打包， 最终生成的结果大致如下, 其中`butotn`目录下的文件名会根据不同的`vite`版本有所不同, 但是大致结构差不多:

```shell
lib
├── es
│   ├── components
│   │   └── button
│   │       ├── index.vue.js
│   │       └── index.vue2.js
│   ├── index.js
│   └── style.css
```

更改`ui-components/package.json`文件的`main`字段为`lib/es/index.js`, 不使用`src/index.js`文件了, 在外部引用的时候就是打包好的文件。

运行`examples`项目，发现`button`组件样式丢失，这时需要在`main.js`文件中单独引入样式文件

```javascript
import '@39nyx/ui-components/lib/es/style.css'
```

这时样式恢复正常

## css分割

在上面的打包配置中，会将所有的css文件打包到`style.css`文件中，如果组件库越来越大，那么样式文件也会月来越大，这个时候可以将样式文件分割成多个文件.

更改`ui-components/vite.config.js`文件，添加`cssCodeSplit`选项为true, 配置`assetFileNames`选项，将所有资源文件打包到`assets`文件夹下，并加上哈希值

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // 静态资源规则
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
})
```

在这一步虽然将样式文件分割为多个文件，但是组件的js并没有和css文件关联起来，所以在使用的时候还是会样式丢失，需要单独引入样式文件， 如果单独引入样式文件，那么`assetFileNames`选项就不能配置`[hash]`

并且使用一个组件，需要单独引入样式比较麻烦，可以手动实现一个在打包好的`js`文件中头部添加自动引入样式的逻辑

要在`js`文件中自动添加加载`css`文件的代码，那么就需要考虑`js`和`css`文件的路径问题，如果`css`和`js`都在同一个文件夹下, 那么直接使用相对路径即可。

在`packages`新建`force-css-inject`组件库, 生成`package.json`文件，然后在`src`文件夹下创建`index.js`文件, 内容如下:

```javascript
import { relative, dirname, join, basename, parse } from 'node:path'
import { fileURLToPath } from 'node:url'

const cssPathMap = new Map()
const cssAssetsMap = new Map()

export function forceCSSInject(baseUrl) {
  const currentFilePath = fileURLToPath(baseUrl)
  const currentDirPath = dirname(currentFilePath)
  return {
    name: 'force-css-inject',
    transform(code, id) {
      if (id.endsWith('&lang.css')) {
        const relativePath = relative(join(currentDirPath, 'src'), id)
        const [prefix] = relativePath.split('?')
        if (cssAssetsMap.has(prefix)) {
          console.warn(`Duplicate CSS file found: ${ prefix }`)
        }
        cssPathMap.set(prefix, basename(relativePath))
        const cssFineName = basename(relativePath)
        if (cssAssetsMap.has(cssFineName)) {
          console.warn(`Duplicate CSS file found: ${ cssFineName }`)
        }
        cssAssetsMap.set(cssFineName, parse(relativePath).dir)
      }
    },
    generateBundle(opts, bundle) {
      for (const [, chunk] of Object.entries(bundle)) {
        if (chunk.facadeModuleId && chunk.facadeModuleId.endsWith('.vue')) {
          const relativePath = relative(join(currentDirPath, 'src'), chunk.facadeModuleId)
          if (cssPathMap.has(relativePath)) {
            const cssFileName = cssPathMap.get(relativePath)
            const cssFilePath = cssFileName.replace(/[=&?]/g, '_')
            chunk.code = `import './${ cssFilePath }';\n${ chunk.code }`
          }
        }
      }
    }
  }
}

export function assetFileNames(assetInfo) {
  const name = basename(assetInfo.name)
  if (cssAssetsMap.has(name)) {
    return `${ cssAssetsMap.get(name) }/[name].css`
  }
  return 'assets/[name]-[hash][extname'
}
```

在`transform`钩子中记录`css`文件的路径，然后在`generateBundle`钩子中在生成的`js`文件中自动导入`css`文件, 在`assetFileNames`中，将css文件路径和js文件路径保持在同一个文件夹下

:::info{title=提示}
不同的`vite`版本，`css`文件路径的处理方式可能有所不同，需要根据实际情况进行调整，这里测试了`v3.2.11`、`v4.2.3`, `v4.4.11`都是可行的。
:::

在`ui-components`添加

在`ui-components/vite.config.js`文件中添加`plugins`选项，将`force-css-inject`插件添加到`plugins`数组中

```javascript
import { defineConfig } from 'vite'
import { forceCSSInject, assetFileNames } from '@39nyx/force-css-inject'

export default defineConfig({
  plugins: [
    forceCSSInject(import.meta.url)
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // 静态资源规则
        assetFileNames: (assetInfo) => {
          return assetFileNames(assetInfo)
        }
      }
    }
  }
})
```

重新执行`pnpm build:lib`命令，可以看到在`button/index.vue.js`文件中自动导入了`css`文件

```javascript
import './index.vue_vue_type_style_index_0_scoped_84f16be6_lang.css';
```


:::info{title=提示}
这样处理并不会污染全局的css样式，因为生成的css文件里面包含了`[dava-v-scope]`
:::
