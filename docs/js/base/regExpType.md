---
title: RegExp类型
order: 6
group:
  title: 基础
  order: 1
---

# RegExp类型

## 3个标志

- **g**:表示全局模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止

- **i**:表示不区分大小写模式，即在确定匹配项时忽略模式与字符串的大小写

- **m**:表示多行模式，即在达到一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项

## 创建

1. 通过字面量进行初始化

```javascript
//匹配字符串中所有‘at’的实例
let pattern1 = /at/g;
//匹配第一个‘bat'或'cat'，不区分大小写
let pattern2 = /[bc]at/i;
//匹配所有以at结尾的字符组合，不区分大小写
let pattern3 = /.at/gi;

```

2. 通过**new**关键字创建

```javascript
//匹配字符串中所有‘at’的实例
let pattern1 = new RegExp("at", "g");
//匹配第一个‘bat'或'cat'，不区分大小写
let pattern2 = new RegExp("[bc]at", "i");
//匹配所有以at结尾的字符组合，不区分大小写
let pattern3 = new RegExp(".at", "gi");
```
通过new关键字创建实例，在需要转义的情况下需要双重转义

```javascript
//匹配字符串中所有‘[at]’的实例
let pattern1 = /\[at\]/g;
//通过new关键字, \\转义成\
let pattern2 = new RegExp("\\[at\\]", "g");
```

## RegExp的实例方法

1. exec方法

```javascript
let testString = 'mon and dad and baby';
let pattern = /mon (and dad( and baby)?)?/gi;
let matches = pattern.exec(testString);
console.log(matches.input); //mon and dad and baby
console.log(matches.index); //0
console.log(matches.length); //3
//数组的第一项时匹配整个字符串，第二项时配置最外面的组/(and dad( and baby)?)?/，第三项时匹配去掉最外层的组/( and baby)?/，如果里面还有组，依次类推
console.log(matches[0]); //mon and dad and baby
console.log(matches[1]); //and dad and baby
console.log(matches[2]); // and baby
```
对于exec方法，模式设置了全局标志，也只会返回匹配到的第一项，但是在不设置全局标志的时候，在同一个字符串上多次调用exec方法，将始终返回第一个匹配项
的信息。而在设置全局标志的情况下，每次调用exec()则都会在字符串中继续查找新匹配项

```javascript
let text = 'cat, bat, sat, fat';
let pattern1 = /.at/;
let matches = pattern1.exec(text);
console.log(matches.index); //0
console.log(matches[0]); //cat

matches = pattern1.exec(text);

console.log(matches.index); //0
console.log(matches[0]); //cat

let pattern2 = /.at/g;
let matches1 = pattern2.exec(text);
console.log(matches1.index); //0
console.log(matches1[0]); //cat

matches1 = pattern2.exec(text);

console.log(matches1.index); //5
console.log(matches1[0]); //bat
```

2. text方法

