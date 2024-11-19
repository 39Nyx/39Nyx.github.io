---
title: Array类型
order: 3
group:
  title: 基础
  order: 1
---
# Array类型


## Array类型的声明

1. 使用new操作符声明一个Array数组

```javascript
let arr1 = new Array();
arr1[0] = "hzjanger";
console.log(arr1.length); //1

let arr2 = new Array(20);
console.log(arr2.length); //20

let arr3 = new Array("hzjanger");
console.log(arr3.length); //1

//可以省略new，省略new是使用new的结果是一样的
let arr4 = Array(20);
console.log(arr4.length); //20
```

2. 使用数组字面量表示法

```javascript
let arr1 = [1, 2, 3];
console.log(arr1.length); //3

let arr2 = [1, , 2, 3];
console.log(arr2);  //[1, empty, 2, 3]
console.log(arr2.length); //4

let arr3 = [, , , ,];
console.log(arr3); //[empty, empty, empty, empty]
console.log(arr3.length); //4

```

## length的使用

数组的项数保存在其length属性中，这个属性始终会返回0或更大的值，并且length不但可以读，而且可以通过
设置length属性，可以从数组的末尾移除项或向数组添加项

```javascript
let arr = [1, 2, 3, 4, 5];
arr.length = 2;
console.log(arr); //[1, 2]

let arr1 = [1, 2, 3, 4, 5];
arr1.length = 7;
console.log(arr1);  //[1, 2, 3, 4, 5, empty, empty]
console.log(arr1[6]); //undefined
```

数组中length的最大值为4 294 967 295，即数组最大可以包含4 294 967 295个项，不能超过这个上限

## 检测数组

1. 对于一个网页或者一个全局作用域而言,使用instanceof操作就能得到满意的结果

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr instanceof Array);
```
缺点: 只能在同一个全局环境执行,如果存在两个或两个以上的全局执行环境(用iframe引进来),就无法判断

2. ECMAScript的`Array.isArray()`方法

```javascript
if (Array.isArray(value)) {
    //...
}
```

## 栈方法

javaScript中可以将数组看做为一个栈,可以执行栈的操作(进栈和出栈),数组中的进栈操作就是在
数组末尾添加一项(push()),出栈操作就是去除掉末尾的一项(pop())

```javascript
let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9];
arr.push(6); 
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
arr.pop();
console.log(arr); //[ 1, 2, 3, 4, 5 ] 
arr.push(arr2); 
console.log(arr) //[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9 ] ]
```
## 队列方法

在javaScript中可以将数组看做一个队列,可以执行队列的操作(入队和出队),数组中的入队操作就是在数组的
末尾添加一项(push()),出队就是将第一项移除(shift()),还有一个从数组的第一个插入数据(unshift())
```javascript
let arr = ['red', 'blue', 'green'];
let red = arr.shift(); //执行出对操作
console.log(arr); //[ 'blue', 'green' ]
console.log(red); //red
let black = arr.unshift('black'); //在数组的第一个插入数据
console.log(black); //3
console.log(arr); //[ 'black', 'blue', 'green' ]
```

## 重排序方法

数组中有两个重排序方法`Array.reverse()`和`Array.sort()`方法,对原数组有影响

`Array.reverse()`: 反转数组的顺序

`Array.sort()`: 默认按照升序,sort()会先把数组中的每一项转为字符串,在进行字符串的比较,可以传入
一个参数自定义比较形式

```javascript
let arr = [2, 5, 3, 6, 10, 7, 3, 2];
arr.reverse(); // 将一个数组进行倒叙
console.log(arr); //[ 2, 3, 7, 10, 6, 3, 5, 2 ]
arr.sort(); //会把数组的所有项变为数组,在进行比较,比较是通过ASCII进行比较,'10'(字符串)与'2'(字符串)比较,因为'1'小于'2',所以'10'在'2'的前面
console.log(arr); //[ 10, 2, 2, 3, 3, 5, 6, 7 ]
/**
 *
 * @param value1
 * @param value2
 * @returns {number}
 */
let compare = function(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
};
/**
 * 对于数组是升序还是降序的记忆方法,只是记忆方法,具体的操作过程不是这样的
 * value1: 函数中的第一个参数,可以看做数组中的前一个数
 * value2: 函数中的第二个参数,可以看做数组中的后一个数
 * 返回值: -1 无需操作 1 需要操作 0 无需操作
 * if (value1 < value2) return -1可以记做为数组的前一个小于后一个,无需操作,所以是升序
 * if (value1 < value2) return 1可以记做为数组的前一个小于后一个,需要操作,所以是降序
 */
arr.sort(compare);
console.log(arr); //[ 2, 2, 3, 3, 5, 6, 7, 10 ]
```

## 操作方法

### concat

数组连接,返回一个新的数组,对原数组没有任何影响
```javascript
let arr = ['red', 'blue', 'green'];
let newArr = arr.concat('yellow', ['black', 'pink']);
console.log(arr); //[ 'red', 'blue', 'green' ]
console.log(newArr); //[ 'red', 'blue', 'green', 'yellow', 'black', 'pink' ]

```

### slice
数组切割,返回一个新的数组,对原数组没有任何影响

```typescript
interface Array<T> {
    /**
    * 返回数组的一部分
    * 传入start和end:表示从start到end-1
    * 传入start但不传入end:表示从开始到数组末尾所有的项
    * 不传入start也不传入end:整个数组
    * @param start 数组的指定部分的开头.从0开始
    * @param end 数组指定部分的结尾,到end-1,不包括end
    */
    slice(start?: number, end?: number): T[];
}
```
例子
```javascript
let arr = [1, 2, 3, 4, 5, 6];
let newArr1 = arr.slice(1);
console.log(newArr1); //[ 2, 3, 4, 5, 6 ]
let newArr2 = arr.slice(1, 4);
console.log(newArr2); //[ 2, 3, 4 ]
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
```

### splice

splice可以做到`增加`、`删除`、`替换`操作,但是会改变数组本身

```typescript
interface Array<T> {
    /**
    * 从数组中删除元素，如有必要，在其位置插入新元素，返回已删除的元素
    * @param start 数组中从零开始的位置，从该位置开始删除元素
    * @param deleteCount 要删除的元素数
    */
    splice(start: number, deleteCount?: number): T[];
    
    /**
    * 从数组中删除元素，如有必要，在其位置插入新元素，返回已删除的元素
    * @param start 数组中从零开始的位置，从该位置开始删除元素
    * @param deleteCount 要删除的元素数
    * @param items 要插入到数组中的元素，而不是已删除的元素
    */
    splice(start: number, deleteCount: number, ...items: T[]): T[];
}
```
例子:
```javascript
let arr = [1, 2, 3, 4, 5, 6];
//删除数组中的所有数据
arr.splice(0); //从第0个开始,一直删除到末尾
console.log(arr); //[]
arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 2); //从下标2开始,删除2个数据
console.log(arr); //[ 1, 2, 5, 6 ]
//增加数据
arr.splice(2, 0, 3, 4); //从下标为2的元素开始,删除0个,从位置2开始插入数据
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
//替换数据
arr.splice(2, 1, 3.1, 3.2); //从下标2开始,删除2个数据,然后从下标2开始插入数据
console.log(arr); //[ 1, 2, 3.1, 3.2, 4, 5, 6 ]
```
### indexOf和lastIndexOf

```typescript
interface Array<T> {
    /**
    * 返回数组中第一次出现值的索引
    * @param searchElement 要在数组中定位的值
    * @param fromIndex 开始搜索的数组索引。如果省略fromIndex，则搜索从索引0开始
    */
    indexOf(searchElement: T, fromIndex?: number): number;
    
    /**
    * 返回数组中指定值的最后一次出现的索引
    * @param searchElement 要在数组中定位的值
    * @param fromIndex 要开始搜索的数组索引。如果省略fromIndex，则搜索从数组中的最后一个索引开始
    */
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    
}
```
例子:
```javascript
let arr = [1, 2, 3, 4, 4, 3, 2, 1];
console.log(arr.indexOf(2)); //1
console.log(arr.lastIndexOf(2)); //6
```

### every

```typescript
interface Array<T> {
    
    /**
    * 确定数组的所有成员是否满足指定的测试
    * @param callbackfn 一个最多接受三个参数的函数。 every方法为array1中的每个元素调用callbackfn函数，直到callbackfn返回false，或者直到数组结束
    * @param thisArg this关键字可以在callbackfn函数中引用的对象。如果省略thisArg，则将undefined用作此值
    */
    every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
    
    
    /**
    * 确定指定的回调函数是否对数组的任何元素返回true
    * @param callbackfn 一个最多接受三个参数的函数。 some方法为array1中的每个元素调用callbackfn函数，直到callbackfn返回true，或者直到数组结束
    * @param thisArg this关键字可以在callbackfn函数中引用的对象。如果省略thisArg，则将undefined用作此值
    */
    some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;
    
    /**
    * 对数组中的每个元素执行指定的操作
    * @param callbackfn 一个最多接受三个参数的函数。 forEach为数组中的每个元素调用一次callbackfn函数
    * @param thisArg this关键字可以在callbackfn函数中引用的对象。如果省略thisArg，则将undefined用作此值
    */
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    
    /**
    * 在数组的每个元素上调用已定义的回调函数，并返回包含结果的数组
    * @param callbackfn 一个最多接受三个参数的函数。 map方法为数组中的每个元素调用callbackfn函数一次
    * @param thisArg this关键字可以在callbackfn函数中引用的对象。如果省略thisArg，则将undefined用作此值
    */
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    
    /**
    * 返回满足回调函数中指定条件的数组元素.
    * @param callbackfn 一个最多接受三个参数的函数。 filter方法为数组中的每个元素调用callbackfn函数一次.
    * @param thisArg this关键字可以在callbackfn函数中引用的对象。如果省略thisArg，则将undefined用作此值.
    */
    filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    
    /**
    * 返回满足回调函数中指定条件的数组元素.
    * @param callbackfn 一个最多接受三个参数的函数。 filter方法为数组中的每个元素调用callbackfn函数一次.
    * @param thisArg this关键字可以在callbackfn函数中引用的对象。如果省略thisArg，则将undefined用作此值.
    */
    filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): T[];
    
}
```
例子:
```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let resultEvery = numbers.every((value, index, numbers) => {
   console.log('value = '+ value + ' index = ' + index);
   return false;
});
console.log(resultEvery);
console.log("==============================");
let someResult = numbers.some((value, index, numbers) => {
    console.log('value = ' + value + ' index = ' + index)
    return (value > 2);
});
console.log(someResult);
console.log("==============================");
let filterResult = numbers.filter((value, index, numbers) => {
    return (value > 2);
});
console.log(filterResult);
console.log("==============================");
let mapResult = numbers.map((value, index, numbers) => {
    return value * 2;
});
console.log(mapResult);
numbers.forEach((value, index, numbers) => {
    console.log('value = ' + value + ' index = ' + index + ' numbers = ' + numbers);
});
```
## 归并方法

### reduce和reduceRight

reduce: 从数组的第一项开始，逐个遍历到最后

reduceRight: 从数组的最后一项开始，向前遍历到第一项
```typescript
interface Array<T> {
    /**
    * 为数组中的所有元素调用指定的回调函数。回调函数的返回值是累计结果，并在下次调用回调函数时作为参数提供
    * @param callbackfn 一个最多可接受四个参数的函数。 reduce方法为数组中的每个元素调用callbackfn函数一次
    * 
    */
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    
    /**
    * 按降序调用数组中所有元素的指定回调函数。回调函数的返回值是累计结果，并在下次调用回调函数时作为参数提供
    * @param callbackfn 一个最多可接受四个参数的函数。 reduceRight方法为数组中的每个元素调用callbackfn函数一次
    */
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
}
```
例子:
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum  = arr.reduce((prev, cur, index, arr) => {
    console.log('prev = ' + prev + ' cur = ' + cur + ' index = ' + index + ' arr ' + arr);
    return prev + cur;
});
console.log("sum =", sum);
console.log("========================================");
let sum1 = arr.reduceRight((prev, cur, index, arr) => {
    console.log('prev = ' + prev + ' cur = ' + cur + ' index = ' + index + ' arr ' + arr);
    return prev + cur;
});
console.log(sum1);

```
