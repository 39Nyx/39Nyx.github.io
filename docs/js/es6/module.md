---
title: 模块化
order: 5
group:
  title: ES6
  order: 7
---

## export命令

用来向外暴露接口

### 单个暴露

在定义变量、函数、类的前面使用`export`

```javascript
//profile.js
export let firstName = 'this is first name';
export function fun() {
    console.log('执行了fun()...');
}
export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

在`index.js中使用`

```javascript
// index.js
import {fun, firstName, Person} from "./profile";

fun();
console.log(firstName);
let person = new Person('hzj', 22);
console.log(person);
```

### 多个一起暴露

不需要在每个变量，函数，类的前面添加`export`，只需要集中在一起导出即可

```javascript
let firstName = 'this is first name';
function fun() {
    console.log('执行了fun()...');
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

//集中在一起导出
export {firstName, fun, Person};
```

### 重命名后暴露

通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。

```javascript
let firstName = 'this is first name';
function fun() {
    console.log('执行了fun()...');
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export {firstName as first, fun, Person};
```

在使用的时候只需要使用first接收就可以了

```javascript
import {first} from "./profile";
console.log(first);
```

::: tip
在导出的时候，不能直接导出变量名，要么在一个对象中导出，要么在定义的时候导出

下面的一些写法是错误的

```javascript
export 1;

var m = 1;
export m;

function f() {}
export f;
```

:::

### 动态对应

使用`export`导出的值是动态对应的关系，如果在导出的文件中改变了导出的值，那个导出的值也会相应的变化

```javascript
//profile.js
let foo = 'hello';
setTimeout(() => foo = 'world', 5000);

export { foo };
```

在profile中定义了foo的值，`5s`后改变`foo`的值

```javascript
//index.js
import {foo} from "./profile";
setInterval(() => {
    console.log(foo)
}, 1000);
```

前`4s`输出的是`hello`，在第`5s`的时候输出的是`world`的值

## import命令

import命令接受一对大括号，里面指定要中其他模块导入的变量名。大括号里面的变量名，必须与被导入模块对外提供的接口的名称相同

::: tip
可以看成是变量的`解构赋值`，import可以表示左边的，export可以表示右边的,所以左边的和右边的需要一样才能够拿到,但和`解构赋值`还是有区别的
:::

可以只用as关键字将输入的变量重命名

```javascript
//profile.js
let name = 'hello';
export { name };

//index.js
import {name as myName} from "./profile";
console.log(myName);
```

`import`输入的变量都是只读的,不能够更改,但是可以更改里面的属性的值,但是在开发中很少更改里面的属性值,因为这是动态的对应关系,如果更改了,其他模块也可以读取到更改后的值

```javascript
//profile.js
let obj = { foo: 'hello'};

setTimeout(() => {
    obj.foo = 'world';
}, 3000);

setInterval(() => {
    console.log('在profile.js输出foo', obj.foo);
}, 1000);
export { obj };

//index.js
import {obj} from "./profile";

setTimeout(() => {
    obj.foo = 'hello';
}, 6000);
setInterval(() => {
    console.log('在index.js输出foo', obj.foo)
}, 1000);
```

在`profile`中`3s`后更改`obj.foo`(obj是对象,可以更改里面的属性的值), 并且每隔`1s`输出一次`foo`的值

在`index.js`中`6s`后更改`obj.foo`的值, 并且每隔`1s`输出一次`foo`的值

### 提升

import具有提升的效果,会提升到文件的头部,所以可以先调用后导入

### 模块的整体加载

使用一个`*`号指定一个对象,所有输出的值都加载到这个对象上去

```javascript
//profile.js
function area(radius) {
    return Math.PI * radius * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

export { area, circumference };

//index.js
import * as circle from './profile';
console.log('圆的面积', circle.area(4));
console.log('圆的周长', circle.circumference(14));

```

::: tip
使用整体加载的时候,加载的那个对象是不能改变的
:::

## 默认导出

`export default`只能使用一次,不能使用多次

```javascript
//profile.js
export default function () {
    console.log('hello world');
}


//index.js
import f from './profile';
console.log(f);
f();
```

可以通过一个对象导出多个

```javascript
//profile.js
export default {
    foo: 'this is foo',
    fun: function () {
        console.log('fun()...');
    }
}

//index.js
import f from './profile';
console.log(f);
console.log(f.foo);
f.fun();
```

::: tip
在单独使用`export`的时候会报错,但是使用`export default`的时候不会报错

```javascript
//不会报错
export default 1;
//会报错
export 1;

function fun() {
    console.log('fun()...');
}
export default fun;
//会报错
export fun;
```

:::

## import()

使用`import`的时候,会提升到代码的顶部,不能够实现条件加载,如果要实现动态加载,那么可以使用`import()`实现条件加载

```javascript
//circle.js
function area(radius) {
    return Math.PI * radius * radius;
}

export {area};
```

只定义了一个方法,求圆的面积

```javascript
//profile.js
function circumference(radius) {
    return 2 * Math.PI * radius;
}

export {circumference};

```

定义了一个方法,求圆的周长

```javascript
let btn = document.getElementById("btn");
let input = document.getElementById("input");
btn.addEventListener('click', () => {
    if (input.value < 10) {
        import('./circle').then(mod => {
            let result = mod.area(input.value);
            console.log('使用的是area方法',result);
        })
    } else {
        import('./profile').then(mod => {
            let result = mod.circumference(input.value);
            console.log('使用的是circumference方法', result);
        })
    }
});
```

获取输入框和按钮的节点,如果输入内容的值小于0,那么点击按钮时调用的是`circle.js`文件中的`area`方法,否则调用的是`profile`文件中的`circumference`方法
