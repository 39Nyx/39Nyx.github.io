---
title: 原型链
order: 3
group:
  title: 对象
  order: 4
---

## 显示原型

每一个函数`function`都会有一个`prototype`,即`显示原型属性`;默认指向一个空的`Object`对象(但是Object对象除外)

> 在默认情况下,函数的原型对象会自动获得`constructor`属性,这个属性指向原型对象,即

```javascript
function Fun1() {
}

console.log(Fun1.prototype.constructor === Fun1)
```

## 隐式原型

每一个实例对象都有一个`__proto__`,称之为`隐式原型属性`

对象隐式原型的值为其对应构造函数的显示原型的值

> 每一个函数不仅拥有显示原型属性,也拥有一个隐式原型属性`__proto__`(function是Function的实例),所以说所有函数的`__proto__`都是相等的
> 对于`Object`来说,`Object`也是`Function`的实例,所以Object对象也有隐式原型属性,`Object`的隐式原型属性指向`Function.prototype`
> 对于`Function`来说,`Function`是`Function`的实例对象,即自身的实例对象`Function = new Function`,`Function`的显示原型和隐是原型是相等的

