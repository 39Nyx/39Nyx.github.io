---
title: 多线程
order: 1
group:
  title: 线程
  order: 5
---

## Web Worker

在JavaScript中是单线程的,但是在H5中有一个`Web Worker`可以做到多线程,一般用于计算,并且不能做`DOM`操作

## 代码实现

1. 页面的编写

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<input type="text" id="number">
<button id="btn">计算</button>
<script src="webWork.js"></script>
</body>
</html>
```

2. 主线程的编写

```javascript
//webWork.js
document.getElementById('btn').onclick = function () {
    let input = document.getElementById('number').value;
    //创建一个Worker对象
    let work = new Worker("work.js");
    //绑定接收消息的监听
    work.onmessage = function (event) {
        console.log('计算结果', event.data);
    };
    console.log('主线程向分线程发送了数据', input);
    //发送给主线程的数据
    work.postMessage(input);
};
```

在`webWork.js`文件中,全局对象是`windows`

3. 分线程的编写

```javascript
//work.js
function f(n) {
    return n <= 2 ? 1: f(n - 1) + f(n - 2);
}
//var onmessage = function (event) {
onmessage = function (event) {
    console.log('接收到的数据', event.data);
    let result = f(event.data);
    console.log('返回给主线程的数据', result);
    //将数据发送给主线程
    postMessage(result);
};
console.log(this);
```

在`work.js`文件中,全局对象是`DedicatedWorkerGlobalScope`,`onmessage`和`postMessage`是通过全局(不是windows)调用的,但是不能加`DedicatedWorkerGlobalScope`

::: tip
`onmessage`的名称不能是其他的名称,可以省略`var`但是不能使用`let`声明
:::
