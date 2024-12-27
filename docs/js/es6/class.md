---
title: class
order: 2
group:
  title: ES6
  order: 7
---

class在es6中就是一个语法糖,只是与es5定义类时候的写法不一样,功能还是一样的

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayAge() {
        console.log(this.age);
    }
}

Person.prototype.sayName = function () {
    console.log(this.name);
};
```

里面的`name`和`age`属性在`Person`上,`sayAge`和`sayName`方法在`Person.prototype`上

## this的使用

使用`class`定义的类的内部有`this`,他将默认指向类的实例

使用其他的方式定义一个类,并将里面的方法取出来可以单独使用

```javascript
var myName = 'Windows name';
let obj = {
    myName: "obj name",
    say: function () {
        console.log(this.myName);
    }
};
obj.say();
//使用赋值解构的方式取出say
let { say } = obj;
say();
```

但是使用`class`定义的类,将里面的方法取出来无法单独使用

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this);
        console.log(this.name);
    }
}
var name = "Windows name";
let person = new Person('hzj', 19);
let { sayName } = person;
sayName();
```

调用sayName方法的时候,发现`this`是`undefined`,所以无法使用`this.name`

### 解决方法

- **最简单的方法: 使用bind绑定this**

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.sayName = this.sayName.bind(this);
    }

    sayName() {
        console.log(this);
        console.log(this.name);
    }
}
```

## set和get使用

定义的`set`和`get`方法会改变某个属性的存值行为和取值行为

```javascript
class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        console.log('调用了get name方法');
        return this._name;
    }

    set name(name) {
        console.log('调用了set name方法');
        this._name = name;
    }
}

let person = new Person("hzj", 22);
person.name = 'xm';
console.log(person.name);
console.log(person._name);
```

::: tip
`_name`并不是私有的,可以直接取值和设置值,只是在命名上进行区别
:::

## 静态方法

使用`static`定义的方法不能在类的实例对象上使用,可以通过`类.方法名()`使用

`static`定义的方法可以被子类继承,可以通过`子类名.方法名()`调用或者通过`supper().方法名()`调用

```javascript
class Foo {
    constructor(name, age) {
    }

    static hello() {
        console.log('hello world');
    }
}

let foo = new Foo();

Foo.hello();

class Child extends Foo {
    static useHello() {
        super.hello();
    }
}

Child.hello();

Child.useHello();
```

::: tip
即使是子类的实例对象,也不能够使用父类的静态方法

```javascript
class Child extends Foo {
    useHello() {
        super.hello();
    }
}

let child = new Child();
child.useHello(); //TypeError: (intermediate value).hello is not a function
```

:::

## new.target

用来判断是否使用`new`关键字创建的对象

- 限制对象必须通过`new`使用

```javascript
function Person(name, age) {
    if (new.target === undefined) {
        throw new Error('必须使用new关键字使用');
    } else {
        this.name = name;
        this.age = age;
    }
}

Person('hzj', 22);
let person = new Person('hzj', 22);
```

- 在`class`中可以限定必须通过子类进行实例化,本身不能实例化

```javascript
class Person {
    constructor(name, age) {
        if (new.target === Person) {
            throw new Error('必须使用new关键字生成实例');
        } else {
            this.name = name;
            this.age = age;
        }
    }
}

class Child extends Person {

    constructor(name, age, classes) {
        super(name, age);
        this.classes = classes;
    }
}

let child = new Child('hzj', 22, 1);
let person = new Person('hzj', 22); //Error: 必须使用new关键字生成实例
```

::: tip
`suppr`必须在`this`的前面使用

这是错误的使用方式

```javascript
constructor(name, age, classes) {
    this.classes = classes;
    super(name, age);
}
```
:::

## extends

使用`extends`关键字实现继承

```javascript
class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class B extends A {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}
```

::: tip

1. 子类必须在`constructor`中调用`supper`,在`ES5`中,是先创建子类的实例对象`this`,然后再将父类的方法添加到`this`上面.`ES6`是先将父类对象的属性和方法,加到`this`上面(所以必须要先调用`supper`方法),然后在用子类的构造函数修改`this`

2. 在子类中,只有在`supper`调用之后才能够**使用**`this`关键字,在`supper`调用之前输出(`console.log(this)`)也不行,因为使用了`this`

:::

## Object.getPrototypeOf()

`Object.getPrototypeOf()`可一获得该类的直接父类

```javascript
class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class B extends A {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}

class C extends B {

}
console.log(Object.getPrototypeOf(B));
console.log(Object.getPrototypeOf(B) === A);
console.log(Object.getPrototypeOf(C));
```

## super关键字

### 作为函数调用

作为函数调用的时候,代表父类的构造函数,但是返回的是子类的实例,即`super`内部的`this`指的是`B`的实例,因此`super()`相当于`A.prototype.constructor.call(this)`

```javascript
class A {
    constructor(x, y) {
        console.log(new.target);
        this.x = x;
        this.y = y;
    }
}

class B extends A {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}

let a = new A(1, 2);
let b = new B(3, 4, 5);
```

### 作为对象使用

#### 普通方法

在普通方法中,`super`指向父类的原型对象,即相当于`A.prototype`

::: tip
在普通方法中,`super`指向父类的原型对象,所以父类实例上的方法和属性无法通过`super`进行使用
:::

```javascript
class A {
    constructor() {
        this.x = 1;
    }

}

A.prototype.y = 2;

class B extends A {
    constructor() {
        super();
    }

    getX() {
        //x是A的实例对象上的属性,无法获取到
        return super.x;
    }

    getY() {
        //y是A的原型对象上的属性,可以获取到
        return super.y;
    }
}
let b = new B();
console.log(b); //B { x: 1 }
console.log(b.getX()); //undefined
console.log(b.getY()); //2
```

::: tip
比较有趣的是,虽然父类的实例对象上的方法和属性无法通过`super`获取到,但是可以通过`super`设置父类实例对象上的方法和属性,在子类普通方法中通过`super`调用父类的方法时,方法内部的`this`指向当前的子类实例
:::

```javascript
class A {
    constructor() {
        this.x = 1;
    }
}

class B extends A {
    constructor() {
        super();
        console.log(this.x); //1
        super.x = 4;
        console.log(super.x); //undefined
        console.log(this.x); //4
    }
}
let b = new B();
```

::: warning
使用`super`进行读时,`super`等同于`A.prototype`,并且内部的`this`指向当前子类实例,赋值时`super`等同于`this`
:::

#### 静态方法

在静态方法中使用`super`的时候,`super`相当于父类(`A`),而不是父类的显示原型属性(`A.prototype`),`super`调用父类的方法时,方法内部的`this`指向当前的子类,而不是子类的实例

```javascript
class A {
    constructor() {
        this.x = 1;
    }

    static getX() {
        console.log(this.x);
        return this.x;
    }
}

class B extends A{
    constructor() {
        super();
        this.x = 2;
    }

    static print() {
        super.getX();
    }
}
B.x = 3;

B.print(); //3
```

::: warning
使用`super`进行读取时,`super`等同于`A`,并且内部的`this`指向当前**子类**(不是子类实例),赋值时等同与`this`
:::

```javascript
class A {
    constructor() {
        this.x = 1;
    }

    static getX() {
        console.log(this.x);
        return this.x;
    }
}

class B extends A{
    constructor() {
        super();
        this.x = 2;
    }

    static print() {
        super.getX();
    }

    static setY() {
        super.y = 4;
        console.log(B.y); //4
        this.y = 666;
        console.log(B.y); //666
        console.log(super.y); //undefined
    }
}
B.x = 3;

B.print(); //3
B.setY();
```

