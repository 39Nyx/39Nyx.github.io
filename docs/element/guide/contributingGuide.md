---
title: 贡献指南
order: 1
---

## 代码克隆

将代码克隆到本地：

```shell
git clone https://github.com/ElemeFE/element.git
# 如果克隆不下来，可以使用代理
git clone -c http.proxy="http://127.0.0.1:7890" https://github.com/ElemeFE/element.git
# 进入项目目录
cd element
```

## 安装依赖

推荐使用`npm`或者`yarn`安装依赖, 不推荐使用`pnpm`安装依赖，这里对`node`版本有限制，无法使用较高版本的`node`, 这里使用的`node`版本是`v14.18.0`, 目前最高`node`版本是`v24.11.1`


主要是`gulp`限制了`node`版本, 并且需要手动升级`gulp`版本到`4.x`以上, 因为`element\packages\theme-chalk\gulpfile.js`文件使用了`4.x`的语法，但是`element\packages\theme-chalk\package.json`中依赖的`gulp`版本是`3.x`, 这点比较坑


```shell [npm]
npm install
```

如果安装遇到了node-sass的问题，可以使用以下命令

```shell [npm]
npm install --ignore-scripts
# 进入theme-chalk目录重新编译node-sass
cd packages/theme-chalk
# 清除并重新安装 node-sass
npm rebuild node-sass

# 或者强制重新构建
npm rebuild node-sass --force
```

手动升级`gulp`版本到`4.x`以上

```shell [pnpm]
# 进入theme-chalk目录
cd packages/theme-chalk
# 升级gulp为4.0.0
npm install gulp@4.0.0
```

## 打包编译

```shell [npm]
npm run dist
```

在执行打包命令的时候，如果在执行`npm run lint`命令失败的时候，可以将这个命令去掉
