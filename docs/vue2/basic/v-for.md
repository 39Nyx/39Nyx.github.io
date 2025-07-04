---
title: v-for循环
order: 2
group:
  title: 基础
  order: 1
---

## key定义

在使用`v-for`循环点时候，不推荐使用`index`作为`key`， 因为在更改数组元素的时候, `index`不能确保唯一性，会导致渲染错误。

例如如下代码结构

```vue | pure
<script>
export default {
  name: 'HomeView',
  data() {
    return {
      list: [
        { name: '张三', id: '001' },
        { name: '李四', id: '002' }
      ]
    }
  },
  methods: {
    add() {
      this.list.unshift({
        name: `王五${this.list.length + 1}`,
        id: `00${this.list.length + 1}`
      })
    }
  }
}
</script>

<template>
  <div>
    <button @click="add">添加</button>
    <div v-for="(item, index) in list" :key="index">
      <span>{{ item.name }}</span>
      <input type="text">
    </div>
  </div>
</template>
```

在张三和李四的输入框里面输入内容后， 在点击添加按钮，会出现渲染错误，发现王五后面的输入框是点击前张三输入框的内容，张三输入框变为了李四的内容，李四输入框内容为空了

在将key值设置为id后，渲染就不会出现问题了

```vue | pure
<script>
export default {
  name: 'HomeView',
  data() {
    return {
      list: [
        { name: '张三', id: '001' },
        { name: '李四', id: '002' }
      ]
    }
  },
  methods: {
    add() {
      this.list.unshift({
        name: `王五${this.list.length + 1}`,
        id: `00${this.list.length + 1}`
      })
    }
  }
}
</script>

<template>
  <div>
    <button @click="add">添加</button>
    <div v-for="(item) in list" :key="item.id">
      <span>{{ item.name }}</span>
      <input type="text">
    </div>
  </div>
</template>

```
