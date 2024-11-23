---
title: 闭包
order: 3
group:
  title: 函数
  order: 3
---

## 定义

一个函数(fun1)里面还有函数(fun2),并且fun2使用了fun1里面的变量,称之为闭包

一个简单的例子如下

```javascript
function fun1() {
    let a = 0;
    function fun2() {
        a++;
        console.log(a);
    }
}
```

闭包一般不会这样用,在使用闭包的是否,一般是将函数作为返回值(在JavaScript里面函数是`公民`,所以可以将函数直接作为返回值)

例子如下

```javascript
function fun1() {
    let a = 0;
    return function() {
        a++;
        console.log(a);
    }
}
```

## 闭包的生命周期

一个函数在执行完成之后,函数里面的内容将会被销毁(作为垃圾进行回收),但使用闭包却不一样,会延长函数的生命周期

```javascript
function fun1() {
    let a = 0;
    return function() {
        a++;
        console.log(a);
    }
}

let fun = fun1();
fun();  //1
fun();  //2
```

::: tip
在使用闭包的时候,需要一个变量来接收,否者的话返回的函数会作为一个垃圾对象被回收
:::

例如

```javascript
fun1()();  //1
fun1()();  //1
fun1()();  //1
```

## 销毁

其实销毁很简单,只需要将变量设置为`null`就可以了

```javascript
let fun = fun1();
fun();  //1
fun = null;
```

## 面试题

1. 写出输出结果

```javascript
function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n);
        }
    }
}
//这里输出undefined,并没有什么好解释的
let a = fun(0);  //undefined
// a = {
//     fun: function (m) {
//         return fun(m, n)
//     }
// };
//这里调用a.fun将会产生一个新的闭包,但是并没有一个变量来接收这个闭包
//函数执行完成之后,将会被回收,所以输出的值为一开始传入的值0
a.fun(1);  //0
//这里也是一样的
a.fun(2);  //0
//这里也是一样的
a.fun(3);  //0

let b = fun(0).fun(1).fun(2).fun(3);
//上面可以拆解为
/*
//会产生一个新的闭包,n的值为0
let b1 = fun(0);
//会产生一个新的闭包,n的值为1
let b2 = b1.fun(1);
//会产生一个新的闭包,n的值为2
let b3 = b2.fun(2);
//会产生一个新的闭包,n的值为3
let b4 = b3.fun(3);
 */
let c = fun(0).fun(1);
c.fun(2);
c.fun(3);
```
