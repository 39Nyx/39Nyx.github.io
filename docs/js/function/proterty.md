---
title: 原型链
order: 2
group:
  title: 函数
  order: 3
---

## 原型与原型链的基本概念

- **`原型`**: 在JavaScript中, 每个函数都有一个`prototype`属性，这个属性指向一个对象，这个对象就是函数的原型对象。当使用构造函数创建新对象时
，新对象会通过内部的[[prototype]]属性链接到构造函数的原型对象上。
- **`原型链`**: 当访问一个对象的属性或方法时, 如果该对象本身没有找到相应的属性或方法，Javascript引擎会自动沿着[[Prototype]]链向上查找, 知道
找到该属性或方法，或者达到原型链的顶端(Object.prototype), 这种通过[[prototype]]链接起来的查找路径就形成了原型链。

## 原型链的工作原理

- 当创建一个函数时， Javascript会自动为其添加一个`prototype`属性, 这个属性是一个对象, 默认情况下它有一个`constructor`属性， 指向该函数本身, 例如:

```javascript
function Person() {}

console.log(Person.prototype.constructor === Person) // true
```

- 当使用`new`关键字创建对象的时候, 新对象的`[[prototype]]`会指向构造函数的`prototye`属性, 例如:

```javascript
function Person() {}

const p1 = new Person()

console.log(p1.__proto__ === Person.prototype)
```

### 显示原型链

### 隐式原型链
