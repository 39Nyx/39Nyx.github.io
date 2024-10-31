---
title: 基本类型
group:
  title: 手册
  order: 2
order: 1
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

> 类型名称 String、Number 和 Boolean（以大写字母开头）是合法的，但它们指的是一些很少出现在您的代码中的特殊内置类型。始终使用 string、number 或 boolean 来表示类型。

## 数组

要指定数组的类型(例如`[1, 2, 3]`), 可以使用语法`number[]`; 此语法适用于任何类型(例如`string[]`是字符串数组、`boolean[]`是布尔数组等)。 还可以写成`Array<number>`, 表达的内容是一样的。

```typescript
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ['hello', 'world'];
const arr3: boolean[] = [true, false];
const arr4: Array<number> = [1, 2, 3];
const arr5: Array<string> = ['hello', 'world'];
const arr6: Array<boolean> = [true, false];
```

## any 类型

TypeScript 还有一种特殊类型, 即`any`类型。它可以表示任意类型，包括那些在编译时还不知道的类型。一般来说，`any`类型是不安全的，应尽量避免使用。

```typescript
let notSure: any = 4;
notSure = 'hello';
notSure = false;
```

### noImplicitAny

在某些情况下，如果没有明确的类型注解，TypeScript 会默认将变量类型设置为`any`， 即隐式 any 类型。这时，可以使用`noImplicitAny`选项来禁用这种行为。

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

TypeScript 支持函数类型注解，可以让你在代码中明确指定函数的输入和输出类型。当你在函数调用时，TypeScript 可以检查参数和返回值的类型是否匹配。

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

在上面的例子中，TypeScript 会自动推导出`forEach`函数的类型，其中参数类型是`string`，返回值类型是`void`。但是，由于`toUppercase`方法并不存在于`string`类型中，TypeScript 会报错。

这个过程称为上下文类型化, 因为函数出现的上下文决定了它应该具有什么类型。与推理规则类似，不需要明确了解这种情况是如何发生的, 但了解这种情况确实会发生可以帮助您注意到何时不需要类型注释。
