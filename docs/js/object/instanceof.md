---
title: instanceof
order: 1
group:
  title: 对象
  order: 4
---

# instanceof

## 作用

`A instanceof B`判断实例A是否对象B的实例

判断方法:

- 实例A的原型链上是否存在对象B的显示原型属性

## 题目

```javascript
function Fun() {

}

let fun = new Fun();
//fun.__proto__ = Fun.prototype  ==>  true
console.log(fun instanceof Fun);
//fun__proto__ = Fun.prototype;
//Fun.prototype.__proto__ = Object.prototype ==> true
console.log(fun instanceof Object);
//Function.__proto__ = Function.prototype
//Function.prototype.__proto__ = Object.prototype  ==> true
console.log(Function instanceof Object);
//Object.__proto__ = Function.prototype  ==>  true
console.log(Object instanceof Function);
//Function.__proto__ = Function.prototype ==> true
console.log(Function instanceof Function);
//Object.__proto__ = Function.prototype
//Function.prototype.__proto__ = Object.prototype ==> true
console.log(Object instanceof Object);

//fun1 ==> undefined
let fun1 = Fun();
let fun2 = Fun;
//undefined不是Function的实例
console.log(fun1 instanceof Function);
//fun2 = Fun
//Fun.__proto__ = Function.prototype
console.log(fun2 instanceof Function);
```
