---
title: 项目创建
order: 1
---

## 文件目录创建

- 创建`vue-mini`文件夹, 在终端打开，并进入`vue-mini`文件夹目录下

- 执行`pnpm init`命令，创建`package.json`文件

- 创建`packages`文件夹

- 在`pckages`文件夹下创建`compiler-core/src/index.ts`文件

- 在`pckages`文件夹下创建`compiler-dom/src/index.ts`文件

- 在`pckages`文件夹下创建`reactivity/src/index.ts`文件

- 在`pckages`文件夹下创建`runtime-core/src/index.ts`文件

- 在`pckages`文件夹下创建`runtime-dom/src/index.ts`文件

- 在`pckages`文件夹下创建`shared/src/index.ts`文件

- 在`pckages`文件夹下创建`vue/src/index.ts`文件

创建好的文件目录如下：

```
vue-mini
├── package.json
└── packages
    ├── compiler-core
    │   └── src
    │       └── index.ts
    ├── compiler-dom
    │   └── src
    │       └── index.ts
    ├── reactivity
    │   └── src
    │       └── index.ts
    ├── runtime-core
    │   └── src
    │       └── index.ts
    ├── runtime-dom
    │   └── src
    │       └── index.ts
    └── shared
        └── src
            └── index.ts
```

## typescript配置

- 安装typescript依赖

在`vue-mini`文件夹下执行以下命令安装typescript依赖：

```
pnpm install -D typescript
```

- 创建`tsconfig.json`文件

在`package.json`同级目录下创建`tsconfig.json`文件，内容如下：

```json
{
  // 编辑器配置
  "compilerOptions": {
    // 根目录
    "rootDir": ".",
    // 严格模式标志
    "strict": true,
    // 指定类型脚本如何从给定的模块说明符查找文件。
    "moduleResolution": "node",
    // https://www.typescriptlang.org/tsconfig#esModuleInterop
    "esModuleInterop": true,
    // JS 语言版本
    "target": "es5",
    // 允许未读取局部变量
    "noUnusedLocals": false,
    // 允许未读取的参数
    "noUnusedParameters": false,
    // 允许解析 json
    "resolveJsonModule": true,
    // 支持语法迭代：https://www.typescriptlang.org/tsconfig#downlevelIteration
    "downlevelIteration": true,
    // 允许使用隐式的 any 类型（这样有助于我们简化 ts 的复杂度，从而更加专注于逻辑本身）
    "noImplicitAny": false,
    // 模块化
    "module": "esnext",
    // 转换为 JavaScript 时从 TypeScript 文件中删除所有注释。
    "removeComments": false,
    // 禁用 sourceMap
    "sourceMap": false,
    // https://www.typescriptlang.org/tsconfig#lib
    "lib": [
      "esnext",
      "dom"
    ]
  },
  // 入口
  "include": [
    "packages/*/src"
  ]
}

```


## rollup配置

安装`rollup`相关依赖

```shell
pnpm add @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript tslib rollup -D
```

创建`rollup.config.js`文件，内容如下：

```javascript
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

/**
 * 默认导出一个数组，数组的每一个对象都是一个单独的导出文件配置，详细可查：https://www.rollupjs.com/guide/big-list-of-options
 */
export default [{
  // 入口文件
  input: 'packages/vue/src/index.ts',
  // 打包出口
  output: [
    // 导出 iife 模式的包
    {
      // 开启 SourceMap
      sourcemap: true,
      // 导出的文件地址
      file: './packages/vue/dist/vue.js',
      // 生成的包格式：一个自动执行的功能，适合作为<script>标签
      format: 'iife',
      // 变量名
      name: 'Vue'
    }
  ],
  // 插件
  plugins: [
    // ts 支持
    typescript({ sourceMap: true }),
    // 模块导入的路径补全
    resolve(),
    // 将 CommonJS 模块转换为 ES2015
    commonjs()
  ]
}]
```

在`package.json`中添加运行脚本

```json
{
  "scripts": {
    "build": "rollup -c"
  }
}
```

执行`pnpm run build`命令，编译出`vue.js`文件。

## 设置路径映射

为了方便导入模块，可以在`tsconfig.json`中设置路径映射：

```json
{
  "compilerOptions": {
    // 设置快捷导入
    "baseUrl": ".",
    "paths": {
      "@vue/*": [
        "packages/*/src"
      ]
    }
  }
}
```

设置之后，可以在代码中这样导入模块：

```typescript
import { createApp } from '@vue/runtime-dom'
```
