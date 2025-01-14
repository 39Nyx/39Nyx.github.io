---
title: 理解对象
order: 1
group:
  title: 对象
---

## 理解对象

创建自定义对象，一般是通过创建Object的一个新实例, 然后添加属性和方法, 如下所示:

```javascript
const person = new Object()
person.name = 'nyx'
person.age = 30
person.city = 'gz'
person.sayHello = function () {
    console.log('Hello, my name is ', this.name)
}
```

这个例子创建了一个名为`person`的对象, 并添加了`name`, `age`, `city`三个属性，以及一个`sayHello`方法. 
`sayHello`方法会显示 `Hello, my name is nyx`, 其中`this.name`解析为`person.name`

当然，上面的形式也可以用其他方式进行简写, 比如:

```javascript
const person = {
    name: 'nyx',
    age: 30,
    city: 'gz',
    sayHello: function () {
        console.log('Hello, my name is ', this.name)
    }
}
```

这种方式叫显示定义对象, 这个例子和上面的例子是等价的, 他们的属性和方法都一样.

## 属性的类型

属性的类型分两种， `数据属性`和`访问器属性`

### 数据属性

数据属性包含一个保存数据值的位置, 值会从这个位置读取, 也会写入到这个位置，数据属性有四个特性描述他们的行为

- [[Configurable]]: 表示属性是否可以通过`delete`删除并重新定义, 是否可以修改他的特性, 以及是否可以把它改为访问器属性.默认情况下都是`true`
- [[Enumerable]]: 表示属性是否可以通过`for...in`循环遍历, 默认情况下都是`true`
- [[Writable]]: 表示属性是否可以被修改, 默认情况下都是`true`
- [[Value]]: 表示属性的值, 默认是`undefined`

在显示定义对象的时候, `[[Configurable]]`、`[[Enumerable]]`、`[[Writable]]`都会被设置为`true`, 而`[[Value]]`会被设置为属性的值.

例如:

```javascript
const person = {
    name: 'nyx'
}
```

等价于:

```javascript
const person = new Object()
Object.defineProperty(person, 'name', {
    value: 'nyx',
    writable: true,
    enumerable: true,
    configurable: true
})
```

在将`writable`设置为`false`后, 这个属性就不能被修改了, 如果修改了就会报错:

```javascript
const person = new Object()
Object.defineProperty(person, 'name', {
    value: 'nyx',
    writable: false,
    enumerable: true,
    configurable: true
})
person.name = 'lucy' // Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
```

在将`configurable`设置为`false`后, 这个属性就不能被删除了, 如果删除了就会报错:

```javascript
const person = new Object()
Object.defineProperty(person, 'name', {
    value: 'nyx',
    writable: true,
    enumerable: true,
    configurable: false
})

delete person.name // This will delete the property 'name' from the object 'person'
```

针对`[[configurable]]`特性, 如果设置为了`false`，那么不能在重新使用`Object.defineProperty()`方法来修改这个属性的特性, 修改了会报错

```javascript
const person = new Object()
Object.defineProperty(person, 'name', {
    value: 'nyx',
    writable: true,
    enumerable: true,
    configurable: false
})

Object.defineProperty(person, 'name', {
    value: 'nyx',
    writable: true,
    enumerable: true,
    configurable: true
})

// Uncaught TypeError: Cannot redefine property: name
```

并且定义了`[[configurable]]`为false，即使再次使用`Object.defineProperty()`, 修改`[[writable]]`在一些情况下
是可以的，一些情况下是不行的, `[[enumerable]]`也是无法更改的

```javascript
// writable: false ---> true 这种不行, true ---> false 这种可以
const person = new Object()
Object.defineProperty(person, 'name', {
  value: 'nyx',
  writable: false,
  enumerable: true,
  configurable: false
})

Object.defineProperty(person, 'name', {
  value: 'nyx',
  writable: true,
  enumerable: true,
  configurable: false
})

// Uncaught TypeError: Cannot redefine property: name
```
