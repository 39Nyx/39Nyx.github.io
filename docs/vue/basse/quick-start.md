---
title: 快速开始
order: 1
group:
  title: 基础
---


## 创建一个Vue项目

使用`create-vue`脚手架创建Vue项目， 进入终端执行以下命令：

:::code-group

```shell [pnpm]
pnpm create vue@latest
```

```shell [yarn]
# For Yarn (v1+)
yarn create vue

# For Yarn Modern (v2+)
yarn create vue@latest

# For Yarn ^v4.11
yarn dlx create-vue@latest
```

```shell [npm]
npm create vue@latest
```
:::

这个命令会自动安装`create-vue`脚手架，只需要根据提示输入项目名称、功能选择，即可快速创建Vue项目。


```shell
pnpm create vue@latest
┌  Vue.js - The Progressive JavaScript Framework
│
◇  请输入项目名称：
│  vue3-playground
│
◆  请选择要包含的功能： (↑/↓ 切换，空格选择，a 全选，回车确认)
│  ◼ TypeScript
│  ◼ JSX 支持
│  ◼ Router（单页面应用开发）
│  ◼ Pinia（状态管理）
│  ◻ Vitest（单元测试）
│  ◻ 端到端测试
│  ◼ ESLint（错误预防）
│  ◼ Prettier（代码格式化）
◇  是否引入 Oxlint 以加快检测？（试验阶段）
│  No
正在初始化项目 /Users/39nyx/nodeProject/vue3-playground...
│
└  项目初始化完成，可执行以下命令：

   cd vue3-playground
   pnpm install
   pnpm format
   pnpm dev

| 可选：使用以下命令在项目目录中初始化 Git：
   
   git init && git add -A && git commit -m "initial commit"
```

### 安装依赖

进入项目目录，执行`pnpm install`命令安装依赖：

```shell
cd vue3-playground
pnpm install
```

### 启动项目

执行`pnpm dev`命令启动项目：

```shell
pnpm dev
```

打开浏览器访问`[http://localhost:5173/](http://localhost:5173/)`，即可看到Vue项目的默认页面。

### 项目结构

:::file-tree

- project-name/ 
  - node_modules/         # 项目依赖的第三方包
  - public/               # 静态资源目录
    - favicon.ico       # 网站图标
  - src                   # 源码目录
    - assets            # 静态资源目录, 如图片、字体等，会被构建处理（如压缩、哈希）
    - components        # 公共组件目录
      - router            # 路由目录
      - App.vue           # 根组件, 所有页面都是在该组件下进行切换的
      - main.ts           # 入口文件
      - views             # 页面组件目录
  - env.d.ts              # 全局类型定义文件, 用于补充 TypeScript 的类型定义, 例如：declare module "*.vue" { }等
  - package.json          # 项目配置文件
  - pnpm-lock.yaml        # 项目依赖版本锁定文件
  - tsconfig.app.json     # 应用级别的 TypeScript 配置文件
  - tsconfig.json         # 项目级别的 TypeScript 配置文件
  - tsconfig.node.sjon    # 工具配置文件专用配置
  - README.md             # 项目说明文档
  - vite.config.ts        # Vite 配置文件
:::

```
.
├── node_modules/         # 项目依赖的第三方包
├── public/               # 静态资源目录
│   └── favicon.ico       # 网站图标
├── src                   # 源码目录
│   ├── assets            # 静态资源目录, 如图片、字体等，会被构建处理（如压缩、哈希）
│   ├── components        # 公共组件目录
│   ├── router            # 路由目录
│   ├── App.vue           # 根组件, 所有页面都是在该组件下进行切换的
│   ├── main.ts           # 入口文件
│   └── views             # 页面组件目录
├── env.d.ts              # 全局类型定义文件, 用于补充 TypeScript 的类型定义, 例如：declare module "*.vue" { }等
├── package.json          # 项目配置文件
├── pnpm-lock.yaml        # 项目依赖版本锁定文件
├── tsconfig.app.json     # 应用级别的 TypeScript 配置文件
├── tsconfig.json         # 项目级别的 TypeScript 配置文件
├── tsconfig.node.sjon    # 工具配置文件专用配置
|── README.md             # 项目说明文档
└── vite.config.ts        # Vite 配置文件
```

### tsconfig.app.json

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "exclude": ["src/**/__tests__/*"],
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",

    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

### tsconfig.node.json

```json
{
  "extends": "@tsconfig/node22/tsconfig.json",
  "include": [
    "vite.config.*",
    "vitest.config.*",
    "cypress.config.*",
    "nightwatch.conf.*",
    "playwright.config.*",
    "eslint.config.*"
  ],
  "compilerOptions": {
    "noEmit": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",

    "module": "ESNext",
    "moduleResolution": "Bundler",
    "types": ["node"]
  }
}
```

#### 配置项详解

- `extends`: 继承的配置文件，这里继承了`@tsconfig/node22/tsconfig.json`的基础配置。
- `include`: 指定该`tsconfig`文件将应用于哪些文件， 这里的文件列表都是项目中的配置文件，都是用`ts`编写的，并且运行在`node.js`环境中(不是浏览器)
  - `vite.config.*`: vite的配置文件
  - `vitest.config.*`: vitest的配置文件
  - `cypress.config.*`: cypress的配置文件
  - `nightwatch.conf.*`: nightwatch的配置文件
  - `playwright.config.*`: playwright的配置文件
  - `eslint.config.*`: eslint的配置文件
- `compilerOptions`: 编译选项
  - `noEmit`: 禁止编译输出文件，这里设置为`true`是为了防止编译时产生额外的`.js`文件
  - `tsBuildInfoFile`: 编译缓存文件，指定了增量编译信息的存储位置。这有助于加快后续的类型检查速度。但注意，由于noEmit设置为true，这个选项可能不会产生实际效果，因为不会生成输出文件
  - `module`: 指定模块系统为ESNext（即最新版本的ES模块）。这适用于使用现代打包工具或运行环境（如Node.js）支持ES模块的场景
  - `moduleResolution`: 指定模块解析策略为`Bundler`（即由TypeScript编译器处理模块依赖）。这适用于使用TypeScript编写的大型项目，以避免模块解析性能问题。
  - `types`: 声明文件列表，这里声明了`node`模块，以便在TypeScript环境中使用Node.js API。

### tsconfig.json

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.node.json"
    },
    {
      "path": "./tsconfig.app.json"
    }
  ]
}
```
