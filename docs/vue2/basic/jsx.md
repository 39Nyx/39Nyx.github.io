---
title: JSX
order: 3
group:
  title: 基础
  order: 1
---


## 插槽

有如下插槽结构

```vue | pure
<script>
  export default {
    props: {
      footerText: {
        type: String,
        default: '底部文字'
      }
    }
  }
</script>
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
```

改用`jsx`渲染：

```javascript
export default {
  props: {
    footerText: {
      type: String,
      default: '底部文字'
    }
  },
  render(createElement) {
    const scopedSlots = this.$scopedSlots
    return createElement('div', {}, [
      scopedSlots.title?.({ title: '自定义标题' }),
      scopedSlots.default?.(),
      scopedSlots.footer?.({ footerText: this.footerText })
    ])
  }
}
````

在`vue`组件中使用

```vue | pure
<script setup>
import SlotDemo from './SlotDemo.jsx`;
</script>

<template>
  <div>
    <slot-demo :footer-text="'自定义页脚'">
      <template v-slot:title="{ title }">
        <div>
          这个是标题 , 参数是: {{ title }}
        </div>
      </template>
      <template>
        <div>
          这个是默认内容
        </div>
      </template>
      <template v-slot:footer="{ footerText }">
        <div>
          这个是页脚 {{ footerText }}
        </div>
      </template>
    </slot-demo>
  </div>
</template>
```
