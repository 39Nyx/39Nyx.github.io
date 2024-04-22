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
```

在`package.json`同级目录下，创建一个名为 `packages` 的文件夹，并在该文件夹下创建`foo`和`bar`文件夹, 并在`foo`和`bar`文件夹下分别创建`package.json`文件。

文件结构如下：

```
root
├── packages
│   ├── foo
│   │   └── package.json
│   └── bar
│       └── package.json
├── package.json
└── pnpm-workspace.yaml
```
