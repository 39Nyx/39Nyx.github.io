---
title: 基本类型
group:
  title: 手册
  order: 2
order: 2
---

## 基本类型

JavaScript 有三个非常常用的原始数据类型：`string`、`number` 和 `boolean`。每个原始数据类型在 TypeScript 中都有对应的类型。

- `string`：字符串类型，用 `string` 表示。例如：`'hello'`、`''`、`"world"`。
- `number`：数值类型，用 `number` 表示。例如：`42`、`3.14`、`0xff`（十六进制）。
- `boolean`：布尔类型，用 `boolean` 表示。例如：`true`、`false`。

```typescript
const str: string = 'hello';
const num: number = 42;
const bool: boolean = true;
```

> 类型名称 String、Number 和 Boolean（以大写字母开头）是合法的，但它们指的是一些很少出现在您的代码中的特殊内置类型。始终使用
> string、number 或 boolean 来表示类型。

## 数组

要指定数组的类型(例如`[1, 2, 3]`), 可以使用语法`number[]`; 此语法适用于任何类型(例如`string[]`是字符串数组、`boolean[]`
是布尔数组等)。 还可以写成`Array<number>`, 表达的内容是一样的。

```typescript
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ['hello', 'world'];
const arr3: boolean[] = [true, false];
const arr4: Array<number> = [1, 2, 3];
const arr5: Array<string> = ['hello', 'world'];
const arr6: Array<boolean> = [true, false];
```

## any 类型

TypeScript 还有一种特殊类型, 即`any`类型。它可以表示任意类型，包括那些在编译时还不知道的类型。一般来说，`any`
类型是不安全的，应尽量避免使用。

```typescript
let notSure: any = 4;
notSure = 'hello';
notSure = false;
```

### noImplicitAny

在某些情况下，如果没有明确的类型注解，TypeScript 会默认将变量类型设置为`any`， 即隐式 any 类型。这时，可以使用`noImplicitAny`
选项来禁用这种行为。

在`tsconfig.json`中添加以下配置：

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

在启用 `noImplicitAny` 后，TypeScript 将会在你定义的某些变量、函数参数等没有明确类型的情况下报错。你需要根据实际情况添加类型注解。例如：

```typescript
// 错误示例：
function add(x, y) {
  return x + y; // 这里会报错，因为没有定义 x 和 y 的类型
}

// 修复示例：
function add(x: number, y: number): number {
  return x + y; // 现在是正确的
}
```

## 变量类型注解

TypeScript 支持变量类型注解，可以让你在代码中明确指定变量的类型。

```typescript
const str: string = 'hello';
const num: number = 42;
const bool: boolean = true;
```

在绝大多数情况下，不需要明确指定变量类型，TypeScript 会根据变量的值自动推导出类型。

```typescript
const str = 'hello';
const num = 42;
const bool = true;
```

## 函数

TypeScript 支持函数类型注解，可以让你在代码中明确指定函数的输入和输出类型。当你在函数调用时，TypeScript
会检查参数和返回值的类型是否匹配，如果不匹配，那么将会出现告警提示。

### 函数参数类型注解

声明函数时，可以为函数的参数添加类型注解。

```typescript
function add(x: number, y: number) {
  return x + y;
}

const result = add(2, 3); // result 的类型是 number
const result2 = add('2', '3'); // 类型检查会报错，因为参数类型不匹配
```

## 返回值类型注解

在函数声明时，可以为函数的返回值添加类型注解。

```typescript
function add(x: number, y: number): number {
  return x + y;
}

const result = add(2, 3); // result 的类型是 number
```

当然，也可以省略返回值类型注解，TypeScript 会自动推导出返回值的类型。

### 匿名函数

匿名函数与函数声明略有不同，它可以根据所使用的位置，自动推导出参数类型和返回值类型。

```typescript
const names = ['Alice', 'Bob', 'Charlie'];

names.forEach(function (name) {
  console.log(name.toUppercase()); // Property toUppercase does not exist on type string. Did you mean toUpperCase?
});

names.forEach((name) => {
  console.log(name.toUppercase()); // Property toUppercase does not exist on type string. Did you mean toUpperCase?
});
```

在上面的例子中，TypeScript 会自动推导出`forEach`函数的类型，其中参数类型是`string`，返回值类型是`void`。但是，由于
`toUppercase`方法并不存在于`string`类型中，TypeScript 会报错。

这个过程称为上下文类型化, 因为函数出现的上下文决定了它应该具有什么类型。与推理规则类似，不需要明确了解这种情况是如何发生的,
但了解这种情况确实会发生可以帮助您注意到何时不需要类型注释。

## Object 类型

除了基础数据类型之外，常见的类型就是对象类型，要定义对象类型，只需要列出其属性及其类型即可。

例如下面例子，函数参数是一个对象类型，那么可以这样定义

```typescript
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
```

其中不同属性之间用分号分隔，也可以使用逗号分隔，例如`function printCoord(pt: { x: number, y: number }) {`,
并且每个属性之间的类型是可选的，如果不指定，那么默认为`any`类型。

### 可选属性

对象的类型可以指定某些属性为可选的，也可以指定所有属性为可选的。如果要将其作为可选的，那么在`:`前面加上`?`即可。

```typescript
function printCoord(pt: { x: number; y?: number }) {
  console.log('The coordinate\'s x value is ' + pt.x);
  console.log('The coordinate\'s y value is ' + pt.y);
}

printCoord({ x: 3, y: 7 });
// The coordinate's x value is 3
// main.ts:8 The coordinate's y value is 7
printCoord({ x: 5 });
// The coordinate's x value is 5
// The coordinate's y value is undefined
```

设置为可选的属性，如果不传，则值为`undefined`，所以在使用的时候需要提前做一下判断

### 联合类型

`Typescript`允许使用各种运算符从现有的类型构建新类型。联合类型是有两种或多种其他类型组成的类型，表示的值可以是其中任何一种类型，将类型中的每一个称为联合的成员类型。

联合类型可以用`|`运算符来表示，例如`number | string`表示可以是`number`类型或`string`类型。

```typescript
function printId(id: number | string) {
  console.log(id.toUpperCase())
}
```

如果是联合类型的时候，只使用其中一个类型上有的方法，那么就会报一下错误

```html
TS2339: Property toUpperCase does not exist on type string | number
Property toUpperCase does not exist on type number
```

这个时候可以使用`typeof`关键字来判断类型，例如

```typescript
function printId(id: number | string) {
  if (typeof id === 'number') {
    console.log(id.toFixed(2))
  } else {
    console.log(id.toUpperCase())
  }
}
```

并且在`else`分支并不需要使用`typeof id === string`判断, 因为只有两种类型，表示`number`就是`string`了

如果定义的联合类型，使用的方法是两种类型都有的方法，那么这个时候也可以不`typeof`关键字判断类型再去使用, 例如数组和字符串都有`slice`方法

```typescript
function getFirstThree(x: number[] | string) {
  // 不需要使用typeof关键字判断类型， 可以直接使用
  return x.slice(0, 3);
}
```

## 类型别名

类型别名可以给一个类型起一个新的名字，方便使用。

例如`string`和`number`的联合类型，可以起一个新的别名

```typescript
type MyType = number | string;

function printId(id: MyType) {
  if (typeof id === 'number') {
    console.log(id.toFixed(2));
  } else {
    console.log(id.toUpperCase());
  }
}
```

给对象类型也可以起一个别名

```typescript
type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  console.log(person.name);
  console.log(person.age);
}

printPerson({ name: 'Alice', age: 25 });
```

## 接口

接口是命名对象类型的另外一种方式

```typescript
interface Person {
  name: string;
  age: number;
}

function printPerson(person: Person) {
  console.log(person.name);
  console.log(person.age);
}

printPerson({ name: 'Alice', age: 25 });
```

### 接口和别名的区别

接口和别名都可以用来定义对象的类型，但是它们的区别在于：

- 接口可以继承，别名不能继承, 虽然别名不能继承，但是可以通过`&`实现扩展

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

```typescript
type Animal = {
  name: string;
}

type Dog = Animal & {
  breed: string;
}
```

- 接口可以声明合并, 别名不能声明合并

```typescript
interface Person {
    name: string;
    age: number;
}

interface Person {
    sex: string
}

function printPerson(person: Person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.sex);
}

printPerson({ name: 'Alice', age: 25, sex: 'female' });
```

使用接口还是别名，可以根据不同的场景选择, 也可以根据自己的喜好来选择。

## 类型断言

有时候调用方法的时候，回返回多种类型，但是知道在某些情况下必定返回这种类型，那么可以使用`as`关键字进行类型断言。

例如使用`document.getElementById`方法，返回值可能是`HTMLDivElement`类型，也可能是`HTMLCanvasElement`，那么可以使用类型断言来指定类型。

```typescript
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const div = document.getElementById('myDiv') as HTMLDivElement;
```

其实`as`只是告诉编译器，你知道这个变量的类型是什么，但是编译器并不会强制执行这个转换。

```typescript
const x = "123"
const y = x as number;
```

这种写法是错误的，会出现以下错误

```html
TS2352: Conversion of type string to type number may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to unknown first.
```

`as`也可以使用两个断言, 例如上面的错误例子想强行不报错，可以这样写

```typescript
const x = "123"
const y = x as unknown as number;

console.log(typeof y); // string
```

虽然这样写不报错，但是输出的`y`是`string`类型，而不是`number`类型。

两个断言其实在`setTimeout`方法中经常用到，例如

```typescript
const timeoutId: number = setTimeout(() => {
    console.log('Hello, world!');
}, 300) as unknown as number;
```

在`node.js`环境和`浏览器`环境下返回的类型是不一样的，所以可以使用两个断言来指定类型。


## 文字类型

文字类型表示一个类型只能有一个值, 无法进行值的更改, 例如

```typescript
let x: 12 = 12;

// 文字类型无法赋与其他值
x = 13
```

多个文字类型联合组成一个新的类型，达到文字类型值的限制

```typescript
type MyType = 'input' | 'button' | 'textarea';

function render(type: MyType) {
  // ...
}

render('input');
render('button');
render('textarea');

// 这样写会报错
render('other');

const obj = { type: 'input' }

render(obj.type); // 这种也会报错
render(obj.type as MyType) // 使用类型断言可以解决


function request(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE') {
  // ...
}

const req = { url: 'http://example.com', method: 'GET' }

request(req.url, req.method); // 这种也会报错
```

这个时候可以继续使用类型断言来指定类型

```typescript
const req = { url: 'http://example.com', method: 'GET' } as const

request(req.url, req.method);
```

`as const` 是 TypeScript 中的一种断言方式，表示将这个对象视为一个常量。它使得对象的属性变为只读类型，具体来说：

- url 属性的类型被推断为字面量类型 "https://example.com" 而不是简单的 string。

- method 属性的类型被推断为字面量类型 "GET" 而不是简单的 string。

或者单独给`method`属性指定类型

```typescript
const req = { url: 'http://example.com', method: 'GET' };

request(req.url, req.method as 'GET')
```

## 非空断言运算符 !

`!` 运算符告诉 TypeScript，开发者确认 x 绝对不会是 null 或 undefined。

通过加上这个运算符，TypeScript 将不会对该行代码进行可选值检查，认为 x 始终是一个 number 类型

例如如下代码

```typescript
function liveDangerously(x?: number) {
    // No error
    console.log(x!.toFixed());
}
```

`liveDangerously`函数的参数`x`是可选参数, 可能是`number`也可能是`undefinde`, 使用非空运算符， 排除了`undefined`的可能性， 所以可以直接使用`toFixed`方法，而不需要做额外的判断, 例如这样写

```typescript
function liveDangerously(x?: number) {
  if (x !== undefined) {
    console.log(x.toFixed());
  }
}
```

在例如如下`vue`组件的`dom`操作中，`!`运算符可以避免`null`和`undefined`的可能性

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const container = ref<HTMLDivElement>();

onMounted(() => {
  container.value!.innerText = 'hello world'
})
</script>

<template>
  <div ref="container"></div>
</template>
```

使用`!`运算符主要是可以少写一些`if`判断, 让代码更加简洁
