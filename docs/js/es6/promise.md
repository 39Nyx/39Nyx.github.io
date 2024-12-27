---
title: promise
order: 3
group:
  title: ES6
  order: 7
---

## promise含义

- 对象状态不受外界影响,存在三个状态,`pending`(进行中)、`fulfilled`(已成功)、`rejected`(已失败)

- 状态改变,就不会再变,只能从进行中 ---> 已成功,进行中 ---> 已失败

```javascript
const promise = new Promise((resolve, reject) => {
    resolve('成功');
    reject(new Error('错误'));
});

promise.then(data => {
    console.log(data)
}).catch(error => {
    console.log(error);
});
```

执行到`resolve('成功')`的时候,已经从`进行中 ---> 已成功`,无法从`已成功 ---> 已失败`,

## promise使用

封装一个ajax请求

```javascript
const getJson = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange =  () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(new Error(xhr.statusText));
                }
            }
        };
        xhr.responseType = 'json';
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send();
    });
};

getJson('./package.json').then(data => {
    console.log(data);
});
```

如果`resolve`是另外一个`promise`,那么`resolve`的状态由里面的`promise`决定

```javascript
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('fail')), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(p1), 1000);
});

p2.then(data => {
    console.log('success', data);
}).catch(data => {
    console.log('error', data);
});
```

`p2`的`resolve`的参数是一个`promise`(p1),p2的状态由p1决定

::: tip
一个`promise`定义之后会立即执行,`resolve`执行之后并不会截止,还会继续往下执行下去
:::

```javascript
const promise = new Promise((resolve, reject) => {
   console.log('hello');
   resolve('未截止');
   console.log('world');
});
console.log('promise执行完了');
promise.then(data => {
    console.log('then里面的内容', data);
});
console.log('js执行完了');
```

## Promise.prototype.catch

`promise.prototype.catch`方法是`.then(null, rejection)`或者`.then(undefined, rejection)`的别名

```javascript
const promise = new Promise((resolve, reject) => {
    reject('错误信息')
});

promise.then(data => {
    console.log('first then', data)
}).then(null, err => {
    console.log(err)
});

//与下面是等价的
promise.then(data => {
    console.log('first then', data)
}).catch( err => {
    console.log(err)
});
```

如果没有使用`catch`方法指定错误回调函数,在`promise`里面的错误不会影响外层代码的执行,但是还是会影响`promise`里面代码的执行

```javascript
const promise = () => {
    return new Promise((resolve, reject) => {
        //x未定义,直接使用会报错
        resolve(x + 2);
        console.log('不可以运行这里');
    });
};

promise().then(data => {
    console.log(data)
});

let btn = document.getElementById('btn');
btn.addEventListener('click', () =>{
   console.log('点击了');
});
```

在`promise`里面执行错误之后,后面的代码(`在promise作用域的代码`)不会在执行,但是不会影响外层函数的代码执行,点击按钮还是会执行

`catch`可以捕获`then`里面`promise`执行的错误,但是`catch`只会捕获`catch`前面的,不会捕获`catch`后面的

```javascript
const promise = (num) => {
    return new Promise((resolve, reject) => {
        if (num < 5) {
            resolve(10);
        } else {
            reject('大于了5')
        }
    });
};

promise().catch(err => {
    console.log(err);
}).then(data => {
    return promise(data);
});
```

如果需要继续捕获,需要在加`catch`

```javascript
promise().catch(err => {
    console.log(err);
}).then(data => {
    return promise(data);
}).catch(err => {
    console.log('第二个catch', err);
});
```

## Promise.prototype.finally

不管promise最后的状态如何,都会执行finally里面的代码,与`try/catch`里面的`finally`类似

```javascript
const promise = new Promise((resolve, reject) => {
   resolve('成功了');
});

promise.then(data => {
    console.log(data)
}).finally(() => {
    console.log('执行了finally方法')
});
```

## Promise.all

`Promise.all`接收一个`promise`实例对象数组,只有所有的`promise`都变为`fulfilled`,才会变为`fulfilled`,只要有一个变为了`rejected`,就会变为`rejected`

```javascript
function isCollegeStudents(age) {
    return new Promise((resolve, reject) => {
       if (age >= 18 && age <= 22) {
           resolve(`${age} yes`);
       } else {
           reject(`${age} no`)
       }
    });
}

let promise = [22, 18, 19, 20, 21, 33].map(value => {
    return isCollegeStudents(value);
});

let promise1 = [22, 18, 19, 20, 21, 33].map(value => {
    return isCollegeStudents(value);
});

Promise.all(promise).then(data => {
    console.log(data)
}).then(err => {
    console.log(err);
});

Promise.all(promise1).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err);
});
```

## Promise.rase

和`Promise.all`方法一样,接收一个`promise`实例对象,不同的是,只要有一个变化了就会改变

## Promise.resolve

将一个现有的对象转为Promise对象,参数可以为以下情况

### 参数是一个Promise实例

不会做任何更改,直接返回

### 参数是一个`thenable`对象

`thenable`是指对象有`then`方法,会将这个对象转为`Promise`对象,并且会立即执行`thenable`对象的`then`方法

```javascript
let thenable = {
    then: function (resolve, reject) {
        resolve('thenable then');
        console.log('执行了then方法');
    }
};

let promise = Promise.resolve(thenable);
promise.then(data => {
    console.log(data)
});
```

### 参数不是具有`thenable`方法的对象,或者不是对象

会将其作为resolve里面的参数直接返回

```javascript
let point = {
    x: 1,
    y: 2
};

let promise = Promise.resolve(point);

promise.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

});
```

::: tip
`let promise = Promise.resolve(point)`等价于`let promise = new Promise((resolve => resolve(point)))`
:::

### 参数为空

什么都不做,直接返回一个`Promise`实例对象

## Promise.reject

`Promise.reject`和`Promise.resolve`不一样,会直接将其作为一个字符串返回,如果是一个`thenable`对象,并不会执行`thenable`对象的`then`方法
