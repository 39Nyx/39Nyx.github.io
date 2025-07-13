---
title: 权衡的艺术
order: 1
group:
  title: 框架设计概览
---

## 命令式和声明式

### 命令式

命令式编程是一种以"如何做"为核心的编程范式， 通过明确的指令(语句)告诉计算机一步步执行任务，注重状态变化和执行流程，关注`过程`, 而非`结果`。

例如把下面的需求翻译为代码:

- 获取id为app的div标签
- 它的文本内容为变量`msg`
- 为其绑定点击事件
- 当点击时弹出提示: ok

对应代码如下:

```javascript
const appElement = document.getElementById('app') // 获取id为app的div标签
const msg = 'Hello World' // 变量msg
appElement.innerText = msg // 它的文本内容为变量`msg`
appElement.onClick = () => { // 为其绑定点击事件
  alert('ok') // 当点击时弹出提示: ok
}
```

可以看到， 自然语言描述能够与代码产生一一对应关系，代码本身描述的是"做事的过程", 这符合我们的逻辑直觉, 适合复杂业务逻辑

### 声明式

和命令式不同，声明式编程是一种以"做什么"为核心的编程范式，开发者只需要描述目标或逻辑，额不需要制定具体的实现步骤。 关注`结果`，而非`过程`。

例如上面的需求, 使用vue3的声明式语法可以写成:

```vue
<template>
  <div id="app" @click="handleClick">{{ msg }}</div>
</template>

<script>
  import { ref } from 'vue'
  const msg = ref('Hello World')
  
  function handleClick() {
    alert('ok')
  }
</script>
```

我只需要我在模板中定义了一个div，绑定了点击事件，文本内容是msg变量, 至于这个怎么把事件关联到标签上以及将文本内容绑定到变量上，这个通通交给vue框架处理




