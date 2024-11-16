---
title: 事件委派
order: 1
group:
  title: DOM
  order: 3
---

## 场景

创建元素的时候,如果该同类元素绑定有事件,那么就需要给创建的新元素绑定相同的事件,如果不绑定事件的话,新创建的元素是不会有事件的

例子:

页面代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<button class="btn">创建一个新标签</button>
<ul id="ul">
    <li>
        <a href="javascript:;" class="link">链接1</a>
    </li>
    <li>
        <a href="javascript:;" class="link">链接1</a>
    </li>
    <li>
        <a href="javascript:;" class="link">链接1</a>
    </li>
</ul>
<script src="事件委派.js"></script>
</body>
</html>
```

js代码

```javascript
//事件委派.js
window.onload = function () {
    let ul = document.getElementById("ul");
    let a = document.getElementsByClassName('link');
    for (let i = 0; i < a.length; i++) {
        a[i].onclick = function () {
            //必须使用let定义i,不然输出的值永远是3
            console.log('点击了第', i, '个a标签');
        }
    }

    let btn = document.getElementsByClassName('btn');
    btn[0].onclick = function () {
        let li = document.createElement("li");
        li.innerHTML = `<a href="javascript:;" class="link">新链接</a>`;
        ul.appendChild(li);
    }
};
```

这样子创建的新标签并没有点击事件,如果需要增加点击事件,那么就需要手动添加

### 解决方法

#### 手动绑定

手动绑定代码

```javascript
btn[0].onclick = function () {
    let li = document.createElement("li");
    let crateA = document.createElement("a");
    crateA.href = "javascript:;";
    crateA.className = "link";
    crateA.innerText = "新链接";
    let len = a.length + 1;
    crateA.onclick = function() {
        console.log('点击了', len, '个a标签');
    };
    li.appendChild(crateA);
    ul.appendChild(li);
}
```

虽然实现了,当时如果触发的事件代码逻辑越复杂,需要绑定的事件多,还一个一个的去绑定特别麻烦

#### 使用事件委派

通过给他的祖先元素(只要是祖先元素就可以,但是需要选择合适的)绑定事件,再判断触发的是不是需要绑定的元素,如果是,则执行,否则不执行

```javascript
window.onload = function () {
    let ul = document.getElementById("ul");
    let a = document.getElementsByClassName('link');

    ul.onclick = function (event) {
        //通过判断class名称是否为link,这种判断方式不是特别稳妥
        if (event.target.className === 'link') {
            console.log('点击了');
        }
    };

    let btn = document.getElementsByClassName('btn');
    btn[0].onclick = function () {
        let li = document.createElement("li");
        li.innerHTML = `<a href="javascript:;" class="link">新链接</a>`;
        ul.appendChild(li);
    }
};
```

