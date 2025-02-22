---
title: 基本数据类型
order: 2
group:
  title: 基础
  order: 1
---

js有七种基本数据类型: `undefinde`, `Null`, `Number`, `String`, `Boolean`, `Symbol`, `BigInt`,其中`Symbol`是`Es6`新增的, `BigInt`是`Es10`新增的

## undefined

`Undefined`类型只有一个值，就是特殊值`undefined`, 申明变量但是没有初始化时，就相当于给变量赋值`undefined`

> 一般来说，不需要显示的给某个变量赋值为`undefined`。

## Null

`Null`类型只有一个值，就是`null`，逻辑上讲, `null`表示一个空对象指针, 这也是给`typeof`传一个`null`会返回"object"的原因

```javascript
console.log(typeof null) // object
```

`undefinde`的值是由`null`值派生而来的,因此用等于操作符`==`比较`null`和`undefined`的值返回为`true`

```javascript
console.log(undefined == null)   // true
console.log(undefined === null)  // false
```

### undefined和null的区别

- `undefined`表示一个变量没有被声明，或者声明了但是没有被赋值，一个没有传入实

在JavaScript中，`null` 和 `undefined` 都表示某种形式上的 "无值" 或者 "缺失的值"，但在具体含义上有一些关键的不同。

在JavaScript中，null 和 undefined 都表示某种形式上的 "无值" 或者 "缺失的值"，但在具体含义上有一些关键的不同。

首先，它们各自属于自己的类型：

- undefined 是 Undefined 类型唯一的成员；

- 而 null 则是 Null 类型唯一的成员。

其次，关于用途：

- undefined 表示的是意外地缺少值的情况。例如当你尝试访问一个尚未定义或者不存在的变量/属性时会得到 undefined。
- 相比之下，null 更像是程序员主动赋予的一个特殊标记，用于明确指出某个位置目前为空或不适用。比如某些API设计可能会返回 null 来表明期望有对象存在但实际上并没有相关联的对象实例。

再来看一些具体的例子说明两者的不同表现：

```javascript
// 声明了一个变量但并未赋初值，默认获得 undefined 
let x;

console.log(x); // 输出: undefined

// 访问非存在的对象属性也会导致 undefined 的出现
const person = {};
console.log(person.age); // 输出: undefined 

// 函数如果没有显式指定返回值，则默认返回 undefined  
function doNothing() {}
console.log(doNothing()); // 输出: undefined  

// 使用 typeof 操作符检测两者的结果也有所不同
console.log(typeof undefined); // 输出："undefined"
console.log(typeof null);      // 错误的历史遗留原因使得输出竟然是:"object"
```

另外一个重要点在于逻辑判断场景下二者的行为一致——都被视为假值(falsy)，因此在诸如 if 语句这样的条件表达式里会被当作 false 处理。然而通过严格相等运算符(===)进行对比时，只有自身与自身才会被认为相同：

```javascript
console.log(null == undefined);   // 结果为 true ，宽松相等忽略类型差异
console.log(null === undefined);  // 结果为 false，严格相等同时考虑数值及类型是否匹配
```

总结来说，虽然表面上看 null 和 undefined 在很多场合下的效果类似，但由于背后的设计意图和实际应用场景各有侧重，所以在编写 JavaScript 程序的时候应当根据具体情况选择合适的使用哪一个。

## Number

## String

## Boolean

## Symbol

## BigInt
