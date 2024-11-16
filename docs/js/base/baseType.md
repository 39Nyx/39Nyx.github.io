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

## Number

## String

## Boolean

## Symbol

## BigInt
