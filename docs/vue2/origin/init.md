---
title: Vue 初始化
order: 3
group:
  title: 源码
  order: 2
---

## Vue 对象定义

在`src/core/instance/index.js`文件中，Vue 的构造函数接收一个参数 options，它是一个对象，包含了 Vue 实例的配置信息。

然后在调用`this._init(options)`方法初始化 Vue 实例对象

`Vue` 的构造函数定义如下：

```javascript
// src/core/instance/index.js
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}
// 设置数据的响应式、初始化生命周期钩子等
initMixin(Vue);
// 为 Vue 实例添加 data、computed、watch 等属性和方法
stateMixin(Vue);
// Vue 的事件监听和事件触发机制在这里实现。它提供了 $on、$emit、$off 等方法，允许用户在组件中处理事件
eventsMixin(Vue);
// 生命周期混入负责管理组件的生命周期钩子，如 created、mounted、updated 和 destroyed 等
lifecycleMixin(Vue);
// 负责提供渲染相关的方法，比如 render 函数的实现。这部分通常涉及到虚拟 DOM 的创建、更新和渲染逻辑
renderMixin(Vue);
```

`initMixin`方法结构如下，给`Vue`实例对象添加`_init`方法， `this._init`, 其他几个`Mixin`结构类似

```javascript
// src/core/instance/init.js
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    // 省略代码...
  };
}
```

`_init`方法主要做了以下几件事情：

1. 合并配置信息  
   将实例创建时传入的 options 与 Vue.options 合并，将合并后的结果赋值给 this.$options。
2. 初始化生命周期钩子
3. 初始化事件中心
4. 初始化渲染函数
5. 初始化数据

Vue 的初始化过程主要分为以下几个步骤：

1. 创建 Vue 实例对象  
   Vue 的构造函数接收一个参数 options，它是一个对象，包含了 Vue 实例的配置信息。
2. 设置数据  
   Vue 实例对象的数据是响应式的，当数据发生变化时，视图会自动更新。
3. 编译模板  
   Vue 实例对象会将模板编译成渲染函数，渲染函数会将数据渲染成虚拟 DOM，并将虚拟 DOM 与真实 DOM 进行比较，找出差异，然后将差异应用到真实 DOM 上。
4. 挂载  
   Vue 实例对象会将渲染函数的结果挂载到指定的 DOM 元素上。

## 1. 创建 Vue 实例对象

```javascript
// 创建 Vue 实例对象
const vm = new Vue({
  // 配置信息
});
```

## 2. 设置数据

```javascript
// 设置数据
vm.name = 'Vue';
vm.age = 20;
```

## 3. 编译模板

```javascript
// 编译模板
vm.$mount('#app');
```

## 4. 挂载

```html
<!-- 挂载到指定的 DOM 元素上 -->
<div id="app">{{ name }} {{ age }}</div>
```

## 完整代码

```javascript
// 创建 Vue 实例对象
const vm = new Vue({
  data: {
    name: 'Vue',
    age: 20,
  },
});

// 编译模板
vm.$mount('#app');
```

```html
<!-- 挂载到指定的 DOM 元素上 -->
<div id="app">{{ name }} {{ age }}</div>
```
