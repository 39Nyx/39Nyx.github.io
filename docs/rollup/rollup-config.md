---
title: 配置文件
order: 2
---

## 配置文件

在`src`的同级目录新建`rollup.config.js`文件, 在执行`rollup`命令时, 添加`--config`命令，会自动读取该文件， 这样在执行命令的时候不需要在
额外执行其他参数了。

```javascript
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  }
}
```

:::info
需要将`package.json`文件设置`"type": "module"`, 不然会出现以下告警

```shell
(node:117) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///Users/<username>/nodeProject/<project-name>/rollup.config.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /Users/<username>/nodeProject/<project-name>/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
created dist/bundle-config.js in 21ms
```
:::

指定配置文件, 在`--config`后面添加文件名，即可指定配置文件，可以分别用于不同的环境, 例如生产环境、开发环境等

```shell
pnpm rollup --config rollup.config.js
```
