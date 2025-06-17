---
title: 闭包
order: 3
group:
  title: 函数
  order: 3
---

## 定义

在 JavaScript 中，**闭包（Closure）是指一个函数与其词法作用域（lexical environment）的组合**。简单来说，闭包允许函数访问并记住其声明时所处的作用域中的变量，即使该函数在其原始作用域之外执行
一个函数(fun1)里面还有函数(fun2),并且fun2使用了fun1里面的变量,称之为闭包

### 闭包的核心特点：

- **记住词法作用域**： 函数可以访问其定义时的作用域链（包括父级变量），即使函数在其他地方被调用。
- **维持变量状态**： 闭包中的变量不会被垃圾回收机制回收，因为它们仍被内部函数引用。


### 闭包的形成条件

- 存在函数嵌套（内部函数）
- 内部函数引用了外部函数的变量
- 内部函数在外部函数作用域外被调用

### 经典示例

```javascript
function outer() {
  const outerVar = "外部变量"; // 外部函数的局部变量

  function inner() { // 内部函数（闭包）
    console.log(outerVar); // 访问外部函数的变量
  }

  return inner; // 返回内部函数
}

const closureFn = outer(); // outer() 执行完毕，作用域看似应被销毁
closureFn(); // 输出："外部变量" ← 仍能访问 outerVar！
```

## 闭包的实际应用场景

### 封装私有变量

```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance; // 私有变量, 外部无法直接访问

  return {
    deposit: (amount) => balance += amount,
    withdraw: (amount) => (amount <= balance) ? balance -= amount : "余额不足",
    getBalance: () => `当前余额：¥${balance}`
  };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // "当前余额：¥1500"
myAccount.withdraw(2000); // "余额不足"
console.log(myAccount.balance); // undefined（无法直接访问私有变量）
```

### 事件处理与回调

```javascript
function setupClickHandler(buttonId) {
  const button = document.getElementById(buttonId);
  let clickCount = 0;
  
  button.addEventListener("click", () => {
    clickCount++;
    console.log(`按钮被点击了 ${clickCount} 次`);
  }); // 回调函数形成闭包，记住 clickCount
}
```

### 函数工厂

使用闭包可以实现函数工厂模式，即返回一个函数，该函数可以生成另一个函数，并且该函数可以访问外部函数的变量。

```javascript
function multiplier(factor) {
  return (x) => x * factor; // 闭包记住 factor
}

const double = multiplier(2);
console.log(double(5)); // 10（5*2）

function createPower(exponent) {
  return function(base) {
    return Math.pow(base, exponent);
  };
}

const square = createPower(2);
const cube = createPower(3);

console.log(square(5)); // 25 (5²)
console.log(cube(3));   // 27 (3³)
```

### 状态保持

闭包可以实现状态的保持，即使函数执行完毕，其内部变量也能被外部函数访问到。在事件处理和异步操作中经常用到

```javascript
function setupCounter() {
  let count = 0;
  const btn = document.getElementById('counterBtn');
  
  btn.addEventListener('click', () => {
    count++; // 闭包保持count状态
    btn.textContent = `点击了 ${count} 次`;
  });
}

// 即使setupCounter执行结束，点击事件仍能访问count
```

### 模块模式

```javascript
const calculator = (function() {
  // 私有方法
  const validate = (num) => typeof num === 'number';
  
  // 暴露公共API
  return {
    add: (a, b) => validate(a) && validate(b) ? a + b : '非法输入',
    multiply: (a, b) => a * b
  };
})();

console.log(calculator.add(2, 3)); // 5
console.log(calculator.validate(5)); // Error（私有方法不可访问）
```

### 防抖/节流函数

```javascript
// 防抖函数（停止操作后执行）
function debounce(fn, delay) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 使用
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', debounce(() => {
  console.log('发送搜索请求...');
}, 300));
```

### 柯里化函数

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return (...nextArgs) => curried.apply(this, args.concat(nextArgs));
    }
  };
}

// 使用
const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
```

### 缓存记忆

```javascript
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// 使用
const factorial = memoize(n => 
  (n <= 1) ? 1 : n * factorial(n - 1)
);

console.log(factorial(5)); // 120（计算）
console.log(factorial(5)); // 120（从缓存读取）
```

### 循环中的闭包

```javascript
for (var i = 0; i < 5; i++) {
  (function(j) { // 立即执行函数创建新作用域
    setTimeout(() => console.log(j), 100);
  })(i);
}
// 输出：0,1,2,3,4（正确）

// 使用let的现代方案（无需闭包）：
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}
```

### API请求状态隔离

```javascript
function createApiClient(baseUrl) {
  let requestCount = 0;
  
  return {
    get: async (endpoint) => {
      requestCount++;
      const res = await fetch(`${baseUrl}/${endpoint}`);
      return res.json();
    },
    getRequestCount: () => requestCount
  };
}

const userApi = createApiClient('https://api.example.com/users');
userApi.get('profile'); // 独立计数
```

:::info
循环中的闭包和API请求状态隔离是特殊的应用场景
:::

## 闭包的注意事项

- **内存泄漏风险**: 闭包会长期持有外部变量的引用，可能导致内存无法释放。不再使用的闭包应及时解除引用（如 `closureFn = null`）

```javascript
let heavyClosure = createHeavyObject();
// 使用后释放
heavyClosure = null; 
```

- **性能影响**: 过度使用闭包可能增加内存消耗，需合理使用

> 核心价值：闭包是 JavaScript 的核心特性，它实现了： 
> 
> 数据封装（私有变量） 
> 
> 状态持久化（函数记忆） 
> 
> 灵活的函数组合（柯里化、函数工厂） 
> 
> 模块化开发基础（隔离作用域）

## 闭包的本质

JavaScript 函数在创建时，会绑定一个包含其词法作用域的 [[Environment]] 内部属性。当函数执行时，即使其原始作用域已销毁，引擎仍通过作用域链保留闭包所需的环境。


> 💡 总结：闭包是 JavaScript 强大灵活性的核心特性之一，它通过“冻结”作用域链，实现了数据的封装和状态的持久化。


## 词法作用域

词法作用域（也称为静态作用域）是 **由代码书写位置决定的作用域**，在代码编译阶段就已确定（而非运行时确定）。其特点是

- 静态性：作用域链在函数定义时就固定了
- 嵌套关系：内部函数可以访问外部函数的变量
- 位置决定：作用域范围取决于代码的物理位置（大括号 {} 结构）

```javascript
function outer() {
  const outerVar = "外部"; // 在 outer 的词法作用域中
  
  function inner() {
    console.log(outerVar); // ✅ 可以访问（词法作用域嵌套）
  }
  
  inner();
}

// inner() 的词法作用域包含：
// 1. 自身作用域（空）
// 2. outer() 的作用域（含 outerVar）
// 3. 全局作用域
```

### 原始作用域

"原始作用域"不是标准术语，但在闭包上下文中通常指

- 函数被创建时的词法作用域
- 即函数定义位置的作用域环境

```javascript
function createFunc() {
  const secret = "原始数据"; // <- 闭包将记住的"原始作用域"
  
  return function() {
    console.log(secret); // 记住定义时的作用域
  };
}

const myFunc = createFunc();
myFunc(); // 输出 "原始数据"（仍能访问原始作用域）
```

### 关键区别

| 特性 | 词法作用域 | 原始作用域 |
| :---: | :---: | :---: |
| 本质 | 语言的作用域规则 | 函数创建时的具体作用域实例 |
| 确定性	| 代码书写时确定 | 	函数定义时确定  |
| 变化性	| 规则不可变 | 	每次函数创建时可能不同 |
| 在闭包中	| 决定变量查找规则	 | 被闭包具体"记住"的作用域环境 |

### 闭包的工作机制

闭包本质是 函数 + 原始作用域的绑定：

```javascript
function factory(prefix) {
  // 这个作用域将成为返回函数的"原始作用域"
  return function(message) {
    console.log(`[${prefix}] ${message}`);
  };
}

const logA = factory("SystemA"); // 创建闭包（绑定 prefix="SystemA"）
const logB = factory("SystemB"); // 创建新闭包（绑定 prefix="SystemB"）

logA("启动"); // [SystemA] 启动 ← 使用原始作用域中的 prefix
logB("警告"); // [SystemB] 警告 ← 使用不同的原始作用域
```

### 为什么重要

- 闭包的基础：闭包能"记住"变量，正是因为函数始终绑定其词法作用域（即定义时的原始作用域）

- 数据封装：通过原始作用域的隔离，实现私有变量

- 状态保持：即使外部函数执行完毕，原始作用域仍被保留

:::info
🌟 简单总结：

- 词法作用域 = 代码书写位置决定的作用域规则

- 原始作用域 = 函数创建时具体的作用域实例（闭包所"记住"的环境）

- 两者共同构成了闭包的工作基础。
:::

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
