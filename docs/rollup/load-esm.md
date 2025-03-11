---
title: 模块加载
order: 4
---

## 模块加载

在`rollup`中，并不能直接使用其他的模块, 例如`lodash`

安装`lodash-es`依赖

```shell
pnpm add lodash-es
```

:::info
注意，不是lodash, 而是lodash-es
:::

在`src/index.js`里面使用`lodash`相关功能

```javascript
import { camelCase } from 'lodash-es'
log(camelCase('Hello World !'))
```

执行`pnpm rollup --config`命令后并不能够成功执行, 会出现以下报错

```shell
src/index.js → dist/bundle.js...
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
lodash-es (imported by "src/index.js")
(!) Missing global variable name
https://rollupjs.org/configuration-options/#output-globals
Use "output.globals" to specify browser global variable names corresponding to external modules:
lodash-es (guessing "lodashEs")
created dist/bundle.js in 27ms
```

这时可以使用`@rollup/plugin-node-resolve`插件来解决这个问题

## plugin-node-resolve

安装插件

```shell
pnpm add @rollup/plugin-node-resolve -D
```

在`rollup.config.js`里面配置`plugin-node-resolve`插件

```javascript
import resolve from '@rollup/plugin-node-resolve'

export default {
    // ...
    plugins: [
       // ...
        resolve()
    ]
}
```
