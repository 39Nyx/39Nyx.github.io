---
title: 异步
order: 1
group:
  title: js
  order: 1
---

## event loop

- js是单线程的
- 异步基于回掉来实现
- event loop就是异步回掉的实现原理


### js执行流程

- 从前到后，一行一行执行
- 如果某一行执行报错，则停止下面代码的执行
- 先把同步代码执行完毕，然后执行异步代码


### 执行过程

示例

```javascript
console.log('Hi')

setTimeout(() => {
  console.log('Hello')
}, 1000)

console.log('Bye') 
```
