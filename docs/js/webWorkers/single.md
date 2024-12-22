---
title: 单线程
order: 1
group:
  title: 线程
  order: 5
---

## js的线程

javaScript是单线程的,在H5中可以使用`Web Workers`来使用多线程

## 代码分类

1. 初始化函数

2. 回调函数

::: tip
先执行初始化函数再执行回调函数
:::

### 案例

```javascript
setTimeout(function () {
    console.log('setTimeout1...');
    alert('setTimeout1...');

}, 4000);
setTimeout(function () {
    console.log('setTimeout2...');
    alert('setTimeout2...');
}, 2000);
setTimeout(function () {
    alert('setTimeout3...');
    console.log('setTimeout3...');
}, 0);
console.log('for循环开始');
let beginTime = Date.now();
for (let i = 0; i < 1000000000; i++) {

}
console.log('for循环结束, 花费时间', Date.now() - beginTime, 'ms');
```

## js的定时器

js的定时器的回调函数是在主线程中执行的,并不是在分线程中执行的
