---
title: 工作空间
group:
  title: 功能
  order: 2
order: 2
---

## 介绍

pnpm 的工作空间功能可以让你在一个文件夹下管理多个包。你可以在该文件夹下创建多个包，每个包都有自己的 `package.json` 文件，并且可以互相依赖。

## 文件目录结构

创建一个空文件夹，然后在该文件夹下运行 `pnpm init`，创建 `package.json` 文件。

在`package.json`同级目录下创建`pnpm-workspace.yaml`文件，并添加以下内容：

```yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

其中`apps`文件夹下存放的是应用，`packages`文件夹下存放的是库。

文件结构如下：

```
root
├── packages
├── apps
├── package.json
└── pnpm-workspace.yaml
```

### 创建应用

应用创建在`apps`目录下，下面以`umi.js`的脚手架为例，创建两个`react`应用。

在`apps`目录下创建`simple-umi-app`文件夹，然后进入目录下，执行以下命令:

```bash
$ pnpm dlx create-umi@latest

# 输出如下
Packages: +40
++++++++++++++++++++++++++++++++++++++++
Progress: resolved 40, reused 40, downloaded 0, added 40, done
┌   create-umi
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
```

在`apps`目录下创建`ant-umi-app`文件夹，然后进入目录下，执行以下命令:

```bash
$ pnpm dlx create-umi@latest

# 输出如下
Packages: +40
++++++++++++++++++++++++++++++++++++++++
Progress: resolved 40, reused 40, downloaded 0, added 40, done
┌   create-umi
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

在`simple-umi-app`和`ant-umi-app`目录下都有`package.json`文件，管理的是自己的依赖，不会影响其他应用的依赖，如果有相同的依赖，可以提到根目录下，统一管理。

比如下面这些依赖是共用的

```json
{
  "dependencies": {
    "@ant-design/icons": "^5.0.1",
    "@ant-design/pro-components": "^2.4.4",
    "antd": "^5.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.33",
    "@types/react-dom": "^18.0.11",
    "typescript": "^5.0.3"
  }
}
```

那么先移除`apps`应用下的依赖，然后在根目录下重新安装,如果不想用命令，可以手动修改`package.json`文件，然后删除`node_modules`目录和`pnpm-lock.yaml`文件，再重新安装依赖。
也可以使用`pnpm`命令先移除在安装，我这里简单处理，就直接手动修改了`package.json`文件重新安装依赖。

## 编写 scripts 命令

在`apps`的`simple-umi-app`和`ant-umi-app`都有对应的`scripts`命令，把这些命令统一到根目录的`package.json`文件中.

```json
{
  "scripts": {
    "ant-umi-app:dev": "pnpm --filter ant-umi-app dev",
    "simple-umi-app:dev": "pnpm --filter simple-umi-app dev"
  }
}
```

脚本名称命名规则可以根据自己的喜好来，我喜欢使用`应用名:命令`的形式，比如`ant-umi-app:dev":`、`simple-umi-app:dev`，应用多了之后同一个应用在一个起，找起来也快一些
