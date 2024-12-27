---
title: 继承
order: 2
group:
  title: 对象
  order: 4
---

## 原型链

每个构造函数都有一个原型对象(`prototype`)，原型对象都包含一个指向构造函数(`constructor`)的指针，而实例都(`__proto__`)包含一个指向原型对象(`prototype`)的内部指针

## 实现方式

### 一般的实现方式

让函数的显示原型指向需要继承函数的实例

```javascript
function Parent() {
    this.parent = "Parent";
}

Parent.prototype.parentSay = function (say) {
    console.log(this.parent);
    console.log(say);
};

function Children() {
    this.children = "Children";
}

//让子类的prototype指向父类(Parent),实现继承
Children.prototype = new Parent();
// 让子类型的原型的constructor指向子类
Children.prototype.constructor = Children;
Children.prototype.childrenSay = function (say) {
    console.log(this.children);
    console.log(say)
};

let c = new Children();
c.parentSay("hello1");
c.childrenSay('hello1');
```

> 不要这样写,不然会把自己本身有的方法覆盖掉

```javascript
Children.prototype.childrenSay = function (say) {
    console.log(this.children);
    console.log(say)
};
Children.prototype = new Parent();
```

使用这种方式可以实现继承,但是并不能更好的对父类的成员函数进行动态的赋值

### 组合继承

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.setName = function (name) {
    this.name = name;
};

function Student(name, age, price) {
    Person.call(this, name, age);
    this.price = price;
}
Student.prototype = new Person();
Student.prototype.constructor = Student;
Student.prototype.setPrice = function (price) {
    this.price = price;
};

let stu = new Student('hzj', 22, 10);
console.log(stu.name, stu.age, stu.price);
stu.setName('hzj1');
stu.setPrice('11');
console.log(stu);
```
