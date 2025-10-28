---
title: 变量
order: 1
group:
  title: 基础
  order: 1
---

变量的声明方式有三种: `let` , `const` , `var`

## let

```file-tree

- src
  - index.ts
  - index.html
  - style.css

```

- 先定义后使用,如果不先定义在使用的话,会存在直接报错

```javascript
console.log(x);
let x = 4;
//Uncaught ReferenceError: Cannot access 'x' before initialization
```

- 在使用`let`定义的作用域当中,这个变量是无法使用的,即使在父级作用域存在仍然无法使用

```javascript
let x = 4;
if (true) {
    console.log(x);
    let x = 4;
}
//Uncaught ReferenceError: Cannot access 'x' before initialization
/*
虽然在if的外面定义了x变量,但是在if条件语句的这个块级作用域当中x变量还是处于未定义状态,所以不能够使用,在if的外面使用var定义也仍然不能使用
*/
```

- 使用`let`声明的变量不能够重复声明

```javascript
let x = 3;
let x = 4;
/*
let x = 3;
var x = 4;
//==============
var x = 3;
let x = 4;
也是一样不能够的
*/
//Uncaught SyntaxError: Identifier 'x' has already been declared
```

## 块级作用域

因为在使用`var`定义变量的时候,会将定义的变量作为一个全局变量(如果在函数中,就是这个函数的全局作用域),这样会带来很多麻烦,比如内层变量可能覆盖外层变量,无意中定义全局变量

- 内层块级作用域不会影响外层的块级作用域

```javascript
{
    {
        {
            let temp = "hello 1";
            console.log(temp);
        }
        let temp = "hello 2";
        console.log(temp);
    }
    let temp = "hello";
    console.log(temp);
}
```

- 最好不要在块级作用域定义函数

例子一:

```javascript
function fun() {
    console.log('外面的fun()...');
}
{
    {
        {
            function fun() {
                console.log('里面的fun()...');
            }
            fun();
        }
    }
}
fun();
```

例子二:

```javascript
function fun() {
    console.log('外面的fun()...');
}
{
    {
        {
            if (false) {
                function fun() {
                    console.log('里面的fun()...');
                }
            }
            fun();
        }
    }
}
fun();
```

例子三:

```javascript
function fun() {
    console.log('外面的fun()...');
}

(function () {
   if (false) {
       function fun() {
           console.log('里面的fun()...');
       }
   }
   fun();
}());
```

## const使用

`const`和`let`许多地方是一样的,有区别的地方在于`const`定义的变量是不可更改的(变量指向的地址不可更改,地址里面的内容是可以更改的,除非将对象冻结)

```javascript
const a = 1;
a = 2;
//Uncaught TypeError: Assignment to constant variable

const obj = {};
//指向一个对象,更改对象里面的值,并不会报错
obj.name = "hzj";
obj.age = 22;
//让obj指向一个新的对象,将会报错
obj = {};

const arr = [1, 2, 3]
arr[1] = 4 // 并不会报错
```

将对象冻结后将不能够更改里面的值,在添加属性的时候不起作用

```javascript
let obj = Object.freeze({});
obj.name = "hzj";
obj.age = 22;
console.log(obj);
```

## 数组的解构赋值

ES6 允许按照一定模式从数组和对象中提取值，然后对变量进行赋值，这被称为解构

### 完全解构

左边的和右边的一一对应,右边可以是数组和`Set`结构

```javascript
let [a, b, c] = [1 ,2 ,3];
//或者
let [a, b, c] = new Set([1 ,2 ,3]);
```

### 解构不成功

#### 解构失败

右边的不是数组或者`Set`结构,会直接失败

```javascript
let [a] = 1;
let [b] = '1';
let [c] = true;
let [d] = undefined;
let [e] = null;
let [f] = {};
```

> 要可以解构,右边的值转为对象后需要有`Iterator`接口

#### 不完全解构

如果可以解构,但是左边的值和右边的值不是一一对应的,没有对应的值将会被赋值为`undefined`

- 左边少,右边多,会将前面的值一一对应,右边后面的值不会在管

```javascript
let [a, b, c] = [1, 2, 3, 4, 5];
console.log(a); //1
console.log(b); //2
console.log(c); //3
```

- 左边多,右边少,没有对应的值将会被赋值为`undefined`

```javascript
let [a, b, c] = [1, 2];
console.log(a); //1
console.log(b); //2
console.log(c); //undefined
```

### 设置默认值

给左边的变量设置一个默认值

```javascript
let [a, b = 1] = [1];
console.log(a, b); //a = 1 , b = 1

let [c, d = 1, e = 2, f = 3] = [1, 2, null, undefined];
console.log(c, d, e, f); //1 2 null 3
```

如果左边设置有默认值,那么在在右边相应的位置上的值判断是否`===undefined`

上面的例子可以理解为

```javascript
let a, b = 1;
a = [1][0]; //a没有默认值,直接赋值
if ([1][1] === undefined) {
    // 什么都不做
} else {
    b = [1][1];
}
console.log(a, b);

let c, d = 1, e = 2, f = 3;

//c和d的省略

if ([1, 2, null, undefined][2] !== undefined) {
    e = [1, 2, null, undefined][2];
}
if ([1, 2, null, undefined][3] !== undefined) {
    f = [1, 2, null, undefined][3];
}
console.log(c, d, e, f);
```

## 对象的解构赋值

对象的解构赋值和数组的解构赋值规则差不多,但有一些差别

### 通过对象属性名取值

```javascript
let {a, b} = {b: 2, a: 1};
console.log(a, b); //1 2
```

其实上面的是一个简写,解构赋值的语法`let {模式1: 变量1, 模式2: 变量2,...} = {模式1: 值1, 模式2: 值2,...};`

```javascript
let {a: a, b: b} = {b: 2, a: 1};
```

赋值的是后者,并不是前者

例子

```javascript
let node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

let {loc, loc: { start }, loc: { start: {line}}} = node;
console.log(loc); //{ start: { line: 1, column: 5 } }
console.log(start); //{ line: 1, column: 5 }
console.log(line); //1
```

- loc的赋值

```javascript
//上面的式子等价于let {loc: loc, loc: { start }, loc: { start: {line}}} = node;
loc = node.loc;
```

- start的赋值

```javascript
//第一次赋值后
({ start } = node.loc);
//等价于({ start: start } = node.loc);
//第二次赋值
start = node.loc.start;
```

- line的赋值

```javascript
//第一次赋值后
({ start: {line}} = node.loc)
//第二次赋值
({line} = node.loc.start)
//等价于({line: line} = node.loc.start)
//第三次赋值
line = node.loc.start.line
```

## 字符串的解构赋值

字符串的解构赋值是可以把字符串转变为一个类似数组的对象

```javascript
let [a, b, c, , d] = "hello world";
console.log(a, b, c, d); //h e l o
```

## 圆括号问题

### 不能使用圆括号

- 变量声明语句

- 函数参数

- 赋值语句的模式

### 可以使用圆括号

- 赋值语句的非模式部分可以使用圆括号

## 用途

- 交换变量的值

- 从函数返回多个值

- 函数参数的定义

- 提取JSON数据

- 函数参数的默认值

- 遍历Map结构

- 输入模块的指定方法
