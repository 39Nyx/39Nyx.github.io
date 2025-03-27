---
title: 快速开始
order: 1
---

## UmiJs

使用[UmiJs](https://umijs.org/)框架, 可以快速搭建React应用。

### 简单模板

```shell [pnpm]
pnpm dlx create-umi@latest
```

执行命令后, 根据提问, 输入`react-umi`作为项目名, 选择`Simple App`作为模板, 选择`pnpm`作为包管理工具, 选择`taobao`作为npm镜像源。即可快速生成一个React项目

```shell
Packages: +40
++++++++++++++++++++++++++++++++++++++++
Progress: resolved 40, reused 40, downloaded 0, added 40, done
┌   create-umi 
│
○  What's the target folder name?
│  react-umi
│
○  Pick Umi App Template
│  Simple App
│
○  Pick Npm Client
│  pnpm
│
○  Pick Npm Registry
│  taobao
│
└  You're all set!

 WARN  deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
 WARN  11 deprecated subdependencies found: @esbuild-kit/cjs-loader@2.4.4, @esbuild-kit/core-utils@3.3.2, @esbuild-kit/esm-loader@2.6.5, @floating-ui/react-dom-interactions@0.3.1, @humanwhocodes/config-array@0.13.0, @humanwhocodes/object-schema@2.0.3, @stylelint/postcss-css-in-js@0.38.0, glob@7.2.3, inflight@1.0.6, rimraf@3.0.2, stable@0.1.8
Packages: +1028
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 1108, reused 1022, downloaded 5, added 1028, done

> @ postinstall /Users/<username>/nodeProject/study/react-umi
> umi setup

info  - [你知道吗？] ANALYZE=1 umi build 可以分析产物的源码构成。
info  - generate files
info  - Preparing...

dependencies:
+ umi 4.4.6

devDependencies:
+ @types/react 18.3.20 (19.0.12 is available)
+ @types/react-dom 18.3.5 (19.0.4 is available)
+ typescript 5.8.2

Done in 14.5s
```

项目的目录结构如下:

```shell
.
├── src
│   ├── assets
│   ├── layouts
│   ├── pages
│   └── pages
├── .gitignore
├── .npmrc
├── .umirc.ts
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── typings.d.ts
```

然后进入目录执行`pnpm start`命令或者`pnpm run dev`命令, 即可启动项目。

:::info
这个模板非常适合从0开始搭建项目
:::

### Ant Design Pro模板

```shell
pnpm dlx create-umi@latest
```

和之前的步骤差不多，只不过选择`Ant Design Pro`作为模板。

```shell
┌   create-umi 
│
○  What's the target folder name?
│  react-umi
│
○  Pick Umi App Template
│  Ant Design Pro
│
○  Pick Npm Client
│  pnpm
│
○  Pick Npm Registry
│  taobao
│
└  You're all set!
```

使用`Ant Design Pro`模板, 会自动集成`Ant Design`和`Ant Design Pro`组件， 并默认使用`Ant Design Pro`的布局

:::info
这个模板适合熟悉`Ant Design`和`Ant Design Pro`的开发者,并且快速创建一套完整的页面
:::
