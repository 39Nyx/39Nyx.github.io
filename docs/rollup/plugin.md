---
title: 插件
order: 3
---

## 使用插件

### rollup-plugin-json

如果需要导入`json`文件，如果直接导入，编译的时候会报错

例如在`src/index.js`文件里面直接导入`package.json`里面的内容


```javascript
import {log} from "./logger";
import { name, version } from '../package.json'
log(name)
log(version)
```

然后执行`pnpm rollup --config`命令后会出现以下错误

```shell
src/index.js → dist/bundle.js...
[!] RollupError: package.json (2:8): Expected ';', '}' or <eof> (Note that you need @rollup/plugin-json to import JSON files)
package.json (2:8)
```

该错误告诉需要使用`@rollup/plugin-json`， 下面就来看如何集成`@rollup/plugin-json`插件

先安装插件

```shell
pnpm add @rollup/plugin-json
```

然后在`rollup.config.js`里面配置插件

```javascript
import json from '@rollup/plugin-json'

export default {
   // ...
    plugins: [
        json()
    ]
}
```

:::info
这里需要注意的是需要配置`plugins`而不要写成`plugin`了
并且`plugins`里面是传递函数调用后的结果，而不是函数本身
:::
