---
group: 如何使用
title: 主题配置
order: 2
---

可以在d-umi的[主题市场](https://d.umijs.org/theme/market)中找到自己想要的主题，我选择的是`dumi-theme-antd`主题。其他主题的配置方法类似，这里就不再赘述。

## 安装主题

<InstallDependencies 
  pnpm='$ pnpm add dumi-theme-antd -D '
  npm='$ npm install dumi-theme-antd --save-dev '
  yarn='$ yarn add dumi-theme-antd -D'></InstallDependencies>

安装之后，无需做任何配置，dumi会自动加载主题。加载规则在dumi的[配置文档](https://d.umijs.org/theme#%E4%B8%BB%E9%A2%98%E5%8A%A0%E8%BD%BD)中有详细说明。

<Alert type="warning">
必须在运行项目的`package.json`中添加主题，如果是monorepo项目，在最外层的`package.json`中添加主题不会生效。
</Alert>
