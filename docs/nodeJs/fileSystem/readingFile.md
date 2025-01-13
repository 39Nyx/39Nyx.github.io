---
title: 读取文件
order: 1
group:
  title: 文件系统
  order: 3
---

## 读取文件

在`Node.js`中，读取文件最简单的方式就是使用`fs`模块中的`readFile`方法， 该方法接受三个参数：文件路径、编码格式（可选）、回调函数。

```javascript
import fs from 'node:fs'

fs.readFile('./index.html', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error reading file', err)
        return
    }
    console.log('File read successfully')
    console.log(data)
})
```

1. 第一个参数是文件路径，可以是绝对路径也可以是相对路径。
2. 第二个参数是编码格式，可以是`utf8`、`base64`等。
3. 第三个参数是回调函数，该函数接受两个参数：错误对象（如果有）和文件内容。

## 同步读取文件

如果需要同步读取文件，可以使用`readFileSync`方法，该方法与`readFile`方法的用法相同，只是不需要回调函数。

```javascript
import fs from 'node:fs'

try {
    const data = fs.readFileSync('./index.html', 'utf8')
    console.log('File read successfully')
    console.log(data)
} catch (err) {
    console.error('Error reading file', err)
}
```

## promise 读取文件

如果需要使用 promise 读取文件，可以使用`promises`模块中的`readFile`方法。

```javascript
import fs from 'node:fs/promises'

fs.readFile('./index.html', 'utf8').then((data) => {
    console.log('File read successfully')
    console.log(data)
}).catch(err => {
    console.error(err)
})
```

或者使用 async/await 语法。

```javascript
import fs from 'node:fs/promises'

async function readFile() {
    try {
        const data = await fs.readFile('./index.html', 'utf8')
        console.log('File read successfully')
        console.log(data)
        return data
    } catch (err) {
        console.error(err)
    }
}

readFile()
```
