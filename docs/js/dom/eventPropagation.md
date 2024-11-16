---
title: 事件传播
order: 2
group:
  title: DOM
  order: 3
---
## 介绍

1. 捕获阶段: 由`document`向内一层一层的捕获事件,默认情况下不会执行

2. 目标阶段: 捕获到目标对象就停止捕获事件

3. 冒泡阶段: 由目标对象一层一层的向外执行

## 事件绑定

1. 通过`onxxx`进行绑定,例如`onclick`,只能绑定一个

2. 通过`addEventListener`进行绑定(IE8及以下不支持),可以绑定多个,传入3个参数----事件的字符串(不带on)、回调函数、布尔值在`捕获阶段`执行还是在`冒泡阶段`执行(默认实在冒泡阶段执行,如果为true就是在捕获阶段执行)

### 代码编写

页面代码编写

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        #box3 {
            width: 100px;
            height: 100px;
            background: rebeccapurple;
        }

        #box2 {
            width: 200px;
            height: 200px;
            background: yellowgreen;
        }

        #box1 {
            width: 300px;
            height: 300px;
            background: blueviolet;
        }
    </style>

    <script src="事件传播.js"></script>
</head>
<body>
<div id="box1">
    box1
    <div id="box2">
        box2
        <div id="box3">
            box3
        </div>
    </div>
</div>
</body>
</html>
```

```javascript
//事件传播.js
window.onload = function () {
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    box1.addEventListener("click", function () {
        console.log('box1');
    });

    box2.addEventListener("click", function () {
        console.log('box2');
    });

    box3.addEventListener("click", function () {
        console.log('box3');
    });
};
```

点击`box3`,默认是输出`box3, box2, box1`,也就是在冒泡阶段执行,在`addEventListener`中添加第三个参数,可以设置为在捕获阶段执行,也就是`由内而外`执行

```javascript
window.onload = function () {
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");
    box1.addEventListener("click", function () {
        console.log('box1');
    }, true);

    box2.addEventListener("click", function () {
        console.log('box2');
    }, true);

    box3.addEventListener("click", function () {
        console.log('box3');
    }, true);
};
```

在捕获阶段执行,也就是`由外而内`执行
