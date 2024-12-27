---
title: Ajax
order: 1
group:
  title: Ajax
  order: 6
---

Ajax全称叫做Asynchornous JavaScript And XML（异步的js和xml），不是新的编程语言，而是将现有的标准组合在一起的使用方式，并且在使用Ajax前，需要了解`XMLHttpRequest`这个对象，实际上就是使用这个对象对方法和属性

## 优点

- 可以无需刷新页面与服务器进行通讯

- 允许根据用户事件来更新部分页面内容

## 缺点

- 没有浏览历史，不能回退

- 存在跨域问题

- 不利于SEO

## XMLHttpRequest

下面逐一介绍`XMLHttpRequest`对象对属性和方法

### readystate

**只读**属性，代表请求的状态码

|  值  |       状态       |                             描述                             |
| :--: | :--------------: | :----------------------------------------------------------: |
|  0   |      UNSENT      |               代理被创建，但尚未调用open()方法               |
|  1   |      OPENED      | open()方法已经被调用，在这个状态中可以通过`setRequestHeader()`方法来设置请求头，可以调用send方法来发送请求 |
|  2   | HEADERS_RECEIVED |        send()方法已经被调用，并且头部和状态已经可获得        |
|  3   |     LOADING      |           下载中；responseText属性已经包含部分数据           |
|  4   |       DONE       |                        下载操作已完成                        |

### onreadystatechange

当`readystate`属性发生变化时调用

```javascript
xhr.onreadystatechange = function () {
    console.log('xhr.readystate改变了，变为了', xhr.readyState)
}
```

### responseType

是一个枚举类型当属性，返回响应的数据类型。允许我们手动的设置返回数据的类型。如果将其设置为一个空的字符串，它将使用默认的`text`类型

|    类型     |                          描述                          |
| :---------: | :----------------------------------------------------: |
|     ''      |       采用默认类型`DOMString`,与设置 `text`相同        |
| arraybuffer |           包含二进制数据的`ArrayBuffer`对象            |
|    blob     |               包含二进制数据的`Blob`对象               |
|  document   |                   一个`HTML`或`XML`                    |
|    json     |                   一个JavaScript对象                   |
|    text     |                  一个`DOMString`对象                   |
| ms-stream  | 下载流的一部分；此响应类型允许下载请求，仅`IE`支持 |

### response

返回一个`ArrayBuffer`,`Blob`,`Document`,`DOMString`,返回的具体内容取决于`responseType`

### responseText

返回一个`DOMString`,该`DOMString`包含对请求的响应，如果请求未成功或未发送，则返回null

### responseURL

**只读**属性，返回经过序列化的响应URL，如果该URL为空，则返回空字符串

### status

**只读**属性，返回一个无符号短整型数字，代表请求的响应状态

### statusText

**只读**属性，返回一个`DOMString`,其中包含HTTP服务器返回的响应状态，是完整的响应状态`200 OK`


```javascript
const xhr = new XMLHttpRequest()
xhr.open('method', 'url')
xhr.send()
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log('请求成功了')
        }
    }
}
```
