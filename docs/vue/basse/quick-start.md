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
├── vite.config.ts        # Vite 配置文件
└── windi.config.ts
```
