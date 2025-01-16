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

在`JavaScript`中，属性可以分为两种基本类型: `数据属性`和`访问器属性`

### 数据属性

数据属性包含一个保存数据值的位置, 值会从这个位置读取, 也会写入到这个位置，数据属性有四个特性描述他们的行为

- [[Configurable]]: 表示属性是否可以通过`delete`删除并重新定义, 是否可以修改他的特性, 以及是否可以把它改为访问器属性.默认情况下都是`true`
- [[Enumerable]]: 表示属性是否可以通过`for...in`循环遍历, 默认情况下都是`true`
- [[Writable]]: 表示属性是否可以被修改, 默认情况下都是`true`
- [[Value]]: 表示属性的值, 默认是`undefined`

我们在显示定义对象的时候, `[[Configurable]]`、`[[Enumerable]]`、`[[Writable]]`都会被设置为`true`, 而`[[Value]]`会被设置为属性的值.

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

#### [[Configurable]]

`Configurable`设置为`true`时, 可以通过`delete`删除属性, 也可以修改属性的特性, 也可以把属性改为访问器属性.

可以通过`delete`删除属性:

```javascript
const obj1 = {}

Object.defineProperty(obj1, 'name', {
    value: 'nyx',
    writable: true,
    enumerable: true,
    configurable: true
})

// configurable设置为true时，可以删除属性，如果设置为false, 那么delete将会报错
delete obj1.name

const obj2 = {}
Object.defineProperty(obj2, 'name', {
    value: 'nyx',
    writable: true,
    enumerable: true,
    configurable: false
})

// configurable设置为false时，不能删除属性, 会抛出Uncaught TypeError: Cannot delete property 'name' of #<Object>错误
delete obj2.name
```

修改属性的特性

```javascript
const obj1 = {}

Object.defineProperty(obj1, 'name', {
  value: 'nyx',
  writable: true,
  enumerable: true,
  configurable: true
})

console.log(obj1.name) // nyx
obj1.name = '39'

// configurable设置为true时，可以修改属性的特性
Object.defineProperty(obj1, 'name', {
  writable: false,
  enumerable: true,
  configurable: false
})
console.log(obj1.name) // 39
try {
  obj1.name = '39 + 1'
} catch (e) {
  console.error(e) // object.js:20 Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
}

try {
  // confiurable设置为false时，不能修改属性的特性, 会抛出Uncaught TypeError: Cannot redefine property: name错误
  Object.defineProperty(obj1, 'name', {
    writable: true,
    enumerable: true,
    configurable: false
  })
} catch (e) {
  console.error(e) // object.js:26 Uncaught TypeError: Cannot redefine property: name
}
```

:::info 注意
`configurable`设置为`false`时, 可以从`writable`属性从`true`改为`false`, 但是不能从`false`改为`true`
但是`enumerable`属性无论是从`true`改为`false`还是从`false`改为`true`, 都不可以.
:::

把属性改为访问器属性

```javascript
const obj = {
  name: 'nyx'
}

Object.defineProperty(obj, 'name', {
  value: 'hello',
  writable: true,
  enumerable: true,
  configurable: true
})

// 只有在 configurable 为 true 时，才能修改属性的特性, 为 false 时，无法修改
Object.defineProperty(obj, 'name', {
  configurable: true,
  get: function () {
    return `${this._name} 是从访问器里面获取的`
  },
  set: function (value) {
    // console.log(`设置name属性为 ${value}`)
    this._name = value
  }
})

console.log(obj.name)
obj.name = 'lucy'
console.log(obj.name)
```

#### [[Writable]]

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

#### [[Enumerable]]

`enumerable`属性表示属性是否可以通过`for...in`循环遍历, 默认是`true`, 如果设置为`false`, 那么这个属性就不会被`for...in`循环遍历到.

```javascript
const obj = {
}

Object.defineProperty(obj, 'name', {
    value: 'nyx',
    writable: true,
    enumerable: true,
    configurable: true
})


// 在enumerable为true的情况下，可以通过for...in循环遍历对象的所有可枚举属性
for (let key in obj) {
    console.log(key, obj[key])
}

Object.defineProperty(obj, 'name', {
    value: 'nyx2',
    enumerable: false,
    writable: true,
    configurable: true
})

obj.age = 18

// 遍历对象时，只会遍历enumerable为true的属性, name被设置为了false，所以不会被遍历到
for (let key in obj) {
    // 这里只会打印age属性
    console.log(key, obj[key])
}
```

### 访问器属性

访问器属性包含两个方法， 一个用于读取属性值， 一个用户设置属性值，还有两个属性和数据属性一样，分别是`[[Configurable]]`, `[[Enumerable]]`

- [[Configurable]]: 表示属性是否可以通过`delete`删除并重新定义, 是否可以修改它的特性， 以及是否可以把它改为数据属性. 默认情况下是`true`
