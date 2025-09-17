---
title: 变量定义区别
order: 3
group:
  title: js
---

在`javascript`中，定义变量的方式有三种：`let`、`const`、`var`。之所以有三种方式，这个是由于历史原因造成的，最初声明变量的方式只有`var`，后来
为了解决作用域问题，所以后面新增了`let`和`const`这两种方式

## 作用域

在`ES5`中的作用域有: `全局作用域`, `函数作用域`, 在`ES6`中新增了块级作用域，块作用域使用`{}`包裹, `if`和`for`等语句里面的`{}`都属于块级作用域。

```javascript
{
    let a = 1;
    var b = 2;
}

console.log(a); // ReferenceError: a is not defined
console.log(b); // 2
```

## var关键字

- 没有块级作用域概念

```javascript
{
    var b = 2;
}

console.log(b); // 2
```

- 有全局作用域和函数作用域的概念

```javascript
var a = 1;

function test() {
  var b = 2;
  console.log(a); // 1
  console.log(b); // 2
}

test();
console.log(a); // 1
console.log(b); // ReferenceError: b is not defined
```

- 不初始化默认为`undefined`

```javascript
var a;
console.log(a); // undefined
```

- 存在变量提升

```javascript
console.log(a); // undefined
var a = 1;

function test() {
  console.log(a); // undefined
  var a = 2;
  console.log(a); // 2
}

test();
```

使用`var`声明变量会将变量提升到当前作用域的最前面，这里一共有两个作用域，`全局作用域`和`test函数作用域`，等价如下代码

```javascript
// 全局作用域提升
var a; // 变量声明提升（初始值 undefined）
function test() { // 函数声明整体提升
  // 函数作用域提升
  var a; // 函数内的变量声明提升（初始值 undefined）

  console.log(a); // 输出 undefined
  a = 2; // 赋值保持原位
  console.log(a); // 输出 2
}

console.log(a); // 输出 undefined
a = 1; // 赋值保持原位

test(); // 函数调用保持原位
```

执行结果:

第一个`console.log(a)`在全局，输出undefined

然后全局a赋值为1

调用`test()`，在`test`函数内部：

- 第一个console.log(a)输出undefined（因为函数内的a被提升，但尚未赋值）

- 然后a赋值为2

- 第二个console.log(a)输出2

因此，输出顺序为：undefined（全局），undefined（函数内），2（函数内）

- 全局作用域用`var`声明的变量，会挂载到全局对象`window`上，可以直接访问·

```javascript
var a = 1;
console.log(window.a); // 1
```

- 同一作用域内，可以重复声明

```javascript
var a = 1;
console.log(a); // 1
var a = 2;
console.log(a); // 2

function test() {
  var a = 3;
  console.log(a); // 3
  var a = 4;
  console.log(a); // 4
}

test();
```
