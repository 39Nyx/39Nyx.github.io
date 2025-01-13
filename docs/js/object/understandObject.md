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

这个例子和上面的例子是等价的, 他们的属性和方法都一样.

## 属性的类型

属性的类型分两种， `数据属性`和`访问器属性`

### 数据属性

数据属性包含一个保存数据值的位置, 值会从这个位置读取, 也会写入到这个位置，数据属性有四个特性描述他们的行为

- [[configurable]]: 表示属性是否可以通过`delete`删除并重新定义, 是否可以修改他的特性, 以及是否可以把它改为访问器属性.默认情况下都是`true`
