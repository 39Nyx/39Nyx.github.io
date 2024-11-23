---
title: this
order: 1
group:
  title: 函数
  order: 3
---



this有四种情况！

1. 当在函数调用的时候指向widow

2. 当方法调用的时候指向调用对象

3. 当用apply和call上下文调用的时候指向传入的第一个参数

4. 构造函数调用指向实例对象


函数里的this可以分为两种来记忆：

如果是使用new方式创建对象，this指向新建的那个对象；

如果只是普通的调用，谁调用这个函数，函数里的this就指向谁~


## apply

可以改变`this`的指向,接收两个参数,第一个参数是在其中运行函数的作用域,另外一个是参数数组

```javascript
var name = "xh";
var age = 22;
function print(name, age) {
    console.log('this指向的值', this);
    console.log(this.name, this.age);
    console.log('传过来的值', name, age);

}

let obj = {
    name: 'xm',
    age: '21',
    print: function () {
        console.log('this指向的值', this);
        console.log(this.name, this.age);
    }
};

print.apply(this, ['xd', 20]);
console.log("================");
print.apply(window, ['xd', 20]);
console.log("================");
print.apply(obj, ['xd', 20]);
console.log("================");
print.apply(obj);
console.log("================");
print.apply();
console.log("================");
obj.print.apply();
```

:::tip
如果apply不带任何参数,默认指向windows
:::

## call

`call`和`apply`一样,可以改变`this`的指向,只是参数传递的方式不一样,第一个参数是在其中运行函数的作用域,其他的参数与函数的参数一一对应,和`apply`不一样,`apply`的第二个参数是一个数组,`call`的参数必须一个一个的传入进去

```javascript
var name = "xh";
var age = 22;
function print(name, age) {
    console.log('this指向的值', this);
    console.log(this.name, this.age);
    console.log('传过来的值', name, age);

}

let obj = {
    name: 'xm',
    age: '21',
    print: function () {
        console.log('this指向的值', this);
        console.log(this.name, this.age);
    }
};

print.call(this, 'xd', 20);
console.log("================");
print.call(window, 'xd', 20);
console.log("================");
print.call(obj, 'xd', 20);
console.log("================");
print.call(obj);
console.log("================");
print.call();
console.log("================");
obj.print.call();
```

::: tip
`call`和`apply`一样,如果没有参数,默认指向的是`windows`
:::

## bind

`bind`也可以改变函数的this指向,可以绑定`this`的函数的作用域

```javascript
var name = "xh";
var age = 22;
function print(name, age) {
    console.log('this指向的值', this);
    console.log(this.name, this.age);
    console.log('传过来的值', name, age);

}

let obj = {
    name: 'xm',
    age: '21',
    print: function () {
        console.log('this指向的值', this);
        console.log(this.name, this.age);
    }
};

let print1 = print.bind(window);
print1();
console.log("==============");
let print2 = print.bind(obj);
print2();
console.log("==============");
let print3 = print.bind();
print3();
console.log("==============");
let print4 = obj.print.bind();
print4();
```

::: tip
`bind`在没有参数的情况下,默认绑定的是`windows`
:::

## 面试题

```javascript
var name = "The window";
let object = {
    name: "my Object name",
    getNameFun: function () {
        return function () {
            return this.name;
        };
    }
};
console.log(object.getNameFun()());  //The window
//可拆解为
// var result = object.getNameFun();
// result(); //等价与window.result();
//所以object里面的this是windows
//使用var定义变量,定义的是全局变量,即var name = "The window"等价与windows.name = "The window"


let name1 = "The window 1";
let object1 = {
    name: "my Object name 1",
    getNameFun: function () {
        return function () {
            return this.name1;
        };
    }
};
console.log(object1.getNameFun()());  //undefined
//可拆解为
// var result = object.getNameFun();
// result(); //等价与window.result();
//所以object里面的this是windows
//使用let定义变量,定义的是局部变量,即let name = "The window 1"并不会在windows变量上添加一个name属性
//所以输出为undefined


var name2 = "The window2";
let object2 = {
    name2: "my Object name 2",
    getNameFun: function () {
        let that = this;
        return function () {
            return that.name2;
        }
    }
};
console.log(object2.getNameFun()());  //my Object name 2
//可拆解为
var result = object.getNameFun();
//result里面有个闭包,闭包的that属性指向object
result(); //等价与window.result();
```
