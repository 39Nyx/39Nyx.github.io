---
title: 参数
order: 1
---

- **--mode: 指定是生产环境还是开发环境,`--mode production`表示生产环境,会把空格和换行去掉,,`--mode development`表示开发环境,会保留空格和换行**

- **--output: 指定出口,`--output ./output/main.js`表示打包后的输出目录为output,文件名为main,不是默认目录`dist/main.js`**

- **--module-bind: 指定使用的loader,例如`--module-bind js=babel-loader`表示加载js的时候使用`babel-loader`**

- **--progress: 显示打包进度**

- **--colors, --color: 表示是否开启颜色**

- **--watch: 监控文件变化之后重新开始打包**:

- **--profile: 详细输出每个环节的用时,排查打包速度瓶颈**
