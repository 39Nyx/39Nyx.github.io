---
title: set和map
order: 4
group:
  title: ES6
  order: 7
---

## Set

### 简介

`Set`是es6新增的数据结构,不能存储重复的值

::: tip
在`Set`中, `NaN`是相同的,将字符串作为构造函数的参数传入进去,会将字符串作为一个数组

```javascript
let set = new Set('hello world');
console.log(set); //Set { 'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd' }
```

:::

### 简单使用

- 将数组去重,使用同样的方法也可以对字符串去重

```javascript
//方法一: 使用扩展运算符（...）
let arr1 = [...new Set([1, 2, 3, 4, 5, 3, 2, 4, 3])];
//方法二: 使用Array.form
let arr2 = Array.from(new Set([1, 2, 3, 4, 5, 3, 2, 4, 3]));
```

### set遍历

在`Set`中,键和值可以说是一样的

Set中的遍历方法

```text
Set.prototype.keys()：返回键名的遍历器
Set.prototype.values()：返回键值的遍历器
Set.prototype.entries()：返回键值对的遍历器
Set.prototype.forEach()：使用回调函数遍历每个成员
```

```javascript
let set = new Set('hello world');
for (let item of set.keys()) {
    console.log(item);
}
console.log("============================");
for (let item of set.values()) {
    console.log(item);
}
console.log("============================");
for (let item of set.entries()) {
    console.log(item);
}
console.log("============================");
for (let item of set) {
    console.log(item);
}
console.log("============================");
set.forEach((value, key) => {
    console.log(`value = ${value}, key = ${key}`);
});
```

## WeakSet

`WeakSet`和`Set`一样,存储的值不会重复,但是只能够存储对象,并且对象都是弱引用(垃坡回收机制不考虑WeakSet对该对象的引用)

```javascript
let weakSet = new WeakSet([{a: 1}]);
let fo = {};
let foo = {};
let a = [1, 2, 3];
weakSet.add(fo);
weakSet.add(foo);
weakSet.add(a);
console.log(weakSet.has(fo));
console.log(weakSet.has(foo));
console.log(weakSet.has(a));
```

::: tip
`WeakSet`也可以使用一个数组作为构造函数的参数传入进去,但是数组中的值一定要是对象,不然会报错

`WeakSet`不能够遍历,并且只有三个方法

- has: 返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

- add: 向 WeakSet 实例添加一个新成员

- delete: 清除 WeakSet 实例的指定成员。
  :::

## Map

键值对集合,键可以是字符串也可以是对象,在map中,只要键的值严格相等,就看做同一个键(`NaN`除外,`NaN`也看做是同一个键)

构造函数的参数

- 可以将数组作为构造方法的参数,该数组是一个个表示键值对的数组

- 将`Set`作为构造函数的参数,但是set里面的数据需要时一个个表示键值对的数值

- 将`Map`作为构造函数的参数

```javascript
let set = new Set([['a', 1], ['b', 2]]);
console.log(set);

//将set作为map的构造函数的参数
let map = new Map(set);
map.set('c', 3);
//将map作为构造函数的参数
let map1 = new Map(map);
console.log(map1);

```

### map遍历

map的遍历和set的遍历是一样的


```javascript
let map = new Map([['a', 1], ['b', 2]]);

for (let key of map.keys()) {
    console.log(key);
}
console.log("=========================");
for (let value of map.values()) {
    console.log(value);
}
console.log("=========================");
for (let [key, value] of map.entries()) {
    console.log(key, value);
}
console.log("=========================");
for (let [key, value] of map) {
    console.log(key, value);
}
console.log("=========================");
map.forEach((value, key, map) => {
    console.log(value, key, map);
});
```

### map与数组的转换

将map转数组可以使用扩展运算符`(...)`

```javascript
console.log([...map]); //[ [ 'a', 1 ], [ 'b', 2 ] ]
console.log([...map.keys()]); //[ 'a', 'b' ]
console.log([...map.values()]); //[ 1, 2 ]
console.log([...map.entries()]); //[ [ 'a', 1 ], [ 'b', 2 ] ]
```

## WeakMap

- 只能以对象作为键(null除外)

- 存储的值是弱引用

- 只有`set`, `get`, `has`, `delete`四个方法
