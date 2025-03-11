---
title: 加载cjs模块
order: 5
---

## 创建cjs模块

在`src`目录下新建一个`cjsModule.js`文件， 里面使用`cjs`语法

```javascript
module.exports = {
    hi: 'Hello World !'
}
```

然后在`src/index.js`里面使用

```javascript
import cjs from './cjsModule.js'
log(cjs)
```

然后执行`pnpm rollup --config`命令, 执行会直接报以下错误

```shell
src/index.js → dist/bundle.js...
[!] RollupError: src/index.js (5:7): "default" is not exported by "src/cjsModule.js", imported by "src/index.js".
https://rollupjs.org/troubleshooting/#error-name-is-not-exported-by-module
```

## plugin-commonjs

安装`@rollup/plugin-commonjs`

```shell
pnpm add @rollup/plugin-commonjs -D
```

在`rollup.config.js`里面添加插件

```javascript
import commonjs from "@rollup/plugin-commonjs";

export default {
    // ...
    plugins: [
        // ...
        commonjs()
    ]
}
```

再次重新执行`pnpm rollup --config`命令，即可正常打包


