---
title: Object类型
order: 5
group:
  title: 基础
  order: 1
---
# Object类型

## Object类型的声明

1. 使用new操作符后跟Object构造函数

```javascript
let obj = new Object();
obj.name = "hzjanger";
obj.age = 21;
console.log(obj);
```

2. 使用**对象字面量**表示法

```javascript
let obj = {
	name: "hzjanger",
	age: 21
};
console.log(obj);
```

使用对象字面量向函数传递大量可选参数

```javascript
function displayInfo(args) {
    let output = "";

    if (typeof args.name == "string") {
        output += "Name "+ args.name + "\n";
    }

    if (typeof args.age == "number") {
        output += "age " + args.age + "\n";
    }
    console.log(output);
}

displayInfo({
    name: "hzjanger",
    age: 21
});

displayInfo({
    name: "hzjanger"
});
```

## Object对象的访问

1. 使用点去访问

```javascript
let obj = {
    name: "hzjanger",
    age: 21
};
console.log(obj.name);
```

2. 使用方括号表示法来访问对象的属性

```javascript
let obj = {
    name: "hzjanger",
    age: 21
};
console.log(obj['name']);
let age = "age";
//方括号里面可以是变量
console.log(obj[age]);
```
