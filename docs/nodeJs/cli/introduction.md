---
title: cli开发介绍
order: 1
group:
  title: cli
  order: 1
---

## 项目搭建

```shell
mkdir my-cli
cd my-cli
pnpm init
pnpm add -D commander
```

依赖安装完成后，更改`package.json`文件, 删除`main`字段并添加`type`字段，并设置值为`module`

```json
{
  "name": "cli-demo",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "commander": "^12.1.0"
  }
}
```

## 入口文件

在`src`目录下创建`index.js`文件，作为入口文件

```javascript
#!/usr/bin/env node

import { program } from 'commander'

program
  .command('create')
  .description('创建文件')
  .action(() => {
      console.log('创建文件')
   })

program.parse()
```
