---
title: 文件写入
order: 4
group:
  title: 文件系统
  order: 3
---

## 写入文件

在 Node.js 中，使用 `fs` 模块可以对文件进行读写操作。

### 异步写入

异步写入文件使用 `fs.writeFile()` 方法，该方法接收三个参数：文件路径、写入内容、回调函数。

```javascript
import fs from 'node:fs'

const content = '文件内容'

fs.writeFile('./test.txt', content, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('文件写入成功')
    }
})

console.log('程序执行到这里')
```

异步写入会先打印 `程序执行到这里` 语句，然后再打印 `文件写入成功` 语句。

### 同步写入

同步写入文件使用 `fs.writeFileSync()` 方法，该方法接收两个参数：文件路径、写入内容。

```javascript
import fs from 'node:fs'

const content = '文件内容 同步写入'

try {
    fs.writeFileSync('./test.txt', content)
    console.log('文件写入成功')
} catch (err) {
    console.error(err)
}

console.log('程序执行到这里')
```

:::info{title=注意}
同步写入文件会阻塞 Node.js 进程，直到写入完成。

同步写入建议在try-catch块中使用。
:::

### promise 异步写入

promise 异步写入从`'node:fs/promises`模块中导入, 然后正常调用`fs.writeFile()`方法。

```javascript
import fs from 'node:fs/promises'

const content = '文件内容 promise 写入'

fs.writeFile('./test.txt', content).then(() => {
    console.log('文件写入成功')
}).catch(err => {
    console.error(err)
})
```


### 文件追加写入

使用 `fs.appendFile()` 方法可以对文件进行追加写入。

```javascript
import fs from 'node:fs'

const content = '文件追加内容写入'
fs.appendFile('./test.txt', content, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('文件追加写入成功')
    }
})
```

### 文件追加 promise 写入

```javascript
import fs from 'node:fs/promises'

const content = '文件追加内容 promise 写入'
fs.appendFile('./test.txt', content).then(() => {
    console.log('文件追加成功')
}).catch(err => {
    console.error(err)
})
```
