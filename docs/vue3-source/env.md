---
title: 环境搭建
order: 2
---

## monorepo环境搭建

初始化`package.json`文件

```shell
pnpm init
```

创建`pnpm-workspace.yaml`文件, 内容如下:

```yaml
packages:
  - 'packages/*'
```

在`packages`目录下创建`reactivity`和`shared`目录, 并分别创建`package.json`文件, 内容如下:

:::code-group

```json [shared/package.json]
{
  "name": "@vue/shared",
  "version": "1.0.0",
  "description": "",
  "module": "dist/shared.esm-bundler.js",
  "unpkg": "dist/shared.global.js",
  "buildOptions": {
    "formats": [
      "esm-bundler",
      "cjs"
    ]
  }
}
```


```json [reactivity/package.json]
{
  "name": "@vue/reactivity",
  "version": "1.0.0",
  "description": "",
  "module": "dist/reactivity.esm-bundler.js",
  "unpkg": "dist/reactivity.global.js",
  "buildOptions": {
    "name": "VueReactivity",
    "formats": [
      "esm-bundler",
      "esm-browser",
      "cjs",
      "global"
    ]
  }
}
```

:::

分别在`shared`和`reactivity`目录下创建`src`目录, 并分别创建`index.ts`文件, 内容可为空


将`shared`添加到`reactivity`中

```shell
pnpm add @vue/shared --workspace --filter @vue/reactivity
```

:::info{title=注意}
`--workspace`一定要加, 否者会从远程仓库下载依赖, 就不是本地的依赖了
:::


## esbuild环境搭建

安装`esbuild`、 `minimist`

```shell
pnpm add esbuild minimist -w
```

在`scripts`文件下创建`dev.js`文件，内容如下

```javascript
import minimist from 'minimist'
import { resolve } from 'path'
import { createRequire } from 'module'
import esbuild from 'esbuild'

// 获取require函数
const require = createRequire(import.meta.url)
// 获取命令行参数
const args = minimist(process.argv.slice(2))
// 获取目标包名
const target = args._[0]
// 获取打包格式
const format = args.f || 'umd'
// 获取目标包的package.json文件
const pkg = require(`../packages/${target}/package.json`)

// 获取入口文件
const entry = resolve(process.cwd(), `packages/${target}/src/index.ts`)

esbuild.context({
    entryPoints: [entry],
    outfile: resolve(process.cwd(), `packages/${target}/dist/${target}.${format}.js`),
    bundle: true,
    platform: 'browser',
    sourcemap: true,
    format: format,
    globalName: pkg.buildOptions?.globalName,
}).then((ctx) => {
    console.log('start dev')
    return ctx.watch()
})
```

:::info{title=提示}
需要将根目录下`package.json`文件中的`type`字段设置为`module`, 不然无法使用`import`导入模块, 只能用`require`导入
:::

在根目录下的`package.json`文件中添加`dev`命令

```json
{
  "scripts": {
    "dev": "node scripts/dev.js reactivity -f esm"
  }
}
```

运行`pnpm dev`命令即可编译`reactivity`包的`esm`格式的包, 可以在`dist`目录下看到编译后的文件, 文件名为`reactivity.esm.js`

## typescript环境搭建

安装`typescript`

```shell
pnpm add typescript -w
```

新建`tsconfig.json`文件， 内容如下

```json
{
  "compilerOptions": {
    "outDir": "dist", // 输出的目录
    "sourceMap": true, // 采用sourcemap
    "target": "es2016", // 目标语法
    "module": "esnext",
    "moduleResolution": "node", // 采用node的模块解析策略
    "strict": false, // 是否开启严格模式, 我这里没开启, 建议开启
    "resolveJsonModule": true, // 允许导入json文件
    "esModuleInterop": true, // 允许使用es6模块导入CommonJS模块
    "jsx": "preserve", // jsx 不转义
    "lib": ["esnext", "dom"], // 支持的类库 esnext 和 dom
    "baseUrl": "./", // 根目录
    "paths": {
      "@vue/*": ["./packages/*/src"]
    }
  }
}

```

## 目录结构

```html
.
├── packages
│   ├── reactivity
│   │   ├── dist
│   │   │   ├── reactivity.esm.js
│   │   │   ├── reactivity.esm.js.map
│   │   │   └── reactivity.esm.js.map
│   │   ├── package.json
│   │   └── src
│   │       └── index.ts
│   └── shared
│       ├── package.json
│       └── src
│           └── index.ts
├── pnpm-workspace.yaml
├── scripts
│   └── dev.js
├── package.json
└── tsconfig.json
```

传送门: [点击查看](https://github.com/39Nyx/vue3-lesson)
