---
title: 快速入门
order: 1
---

## 创建项目

创建一个简单的使用案例

在`src`目录下新建一个`message.js`文件, 里面默认导出一个对象

```javascript
export default {
    hi: 'Hello World !'
}
```

然后在`src`目录下新建一个`logger.js`文件, 主要用于消息输出

```javascript
export const log = msg => {
    console.log('====== INFO ======')
    console.log(msg)
    console.log('==================')
}

export const error = msg => {
    console.error('====== ERROR ======')
    console.error(msg)
    console.error('==================')
}
```

最后在`src`目录下新建一个`index.js`文件, 引入`message.js`和`logger.js`文件, 并且调用`log`方法，不调用`error`方法

```javascript
import message from "./message";
import {log} from "./logger";

const msg = message.hi
log(msg)
```

## 添加依赖

使用`pnpm`初始化`package.json`文件

```shell
pnpm init
```

安装`rollup`依赖

```shell
pnpm add rollup
```

## 命令打包

通过`pnpm`命令执行`rollup`的命令

```shell
# 将其打包为iife格式
pnpm rollup ./src/index.js --format iife
```

执行命令后会在控制台输出以下内容，由于`error`方法并没有被使用，所以不会被打包进来

```javascript
(function () {
    'use strict';

    var message = {
        hi: 'Hello World !'
    };

    const log = msg => {
        console.log('====== INFO ======');
        console.log(msg);
        console.log('==================');
    };

    const msg = message.hi;
    log(msg);

})();
```

也可以将打包后的内容输出到一个文件里面

```shell
pnpm rollup ./src/index.js --format iife --file ./dist/bundle.js
```

执行命令后可以看到`dist`目录下多了个`bundle.js`文件
