---
title: Bpmn.js 使用
order: 1
---

下面是在一个vue项目里面使用bpmn.js的步骤。

## 安装依赖

```bash
pnpm add bpmn-js
```

## 简单使用

先准备一个简单的`.bpmn`文件，比如`pizza-collaboration.bpmn`, 将其放在`public`文件夹下。

然后编写一个方法，通过axios请求这个文件，并返回一个Promise。

```typescript
import axios from 'axios'

export function getPizzaCollaborationBpmn() {
  // 文件放在public/bpmn文件夹下, /bpmn-designer是设置了项目的base
  return axios.get('/bpmn-designer/bpmn/pizza-collaboration.bpmn')
}
```

先`new`一个`BpmnViewer`对象, 构造参数`container`为`DOM`节点

```typescript
import { onMounted, type Ref, ref } from 'vue'
import BpmnViewer from 'bpmn-js'

const container: Ref<HTMLCanvasElement | null> = ref(null)

onMounted(() => {
  if (container.value) {
    const viewer = new BpmnViewer({
      container: container.value,
    })
  }
})
```

创建好`BpmnViewer`实例对象后，就可以通过`importXML`方法导入`.bpmn`文件了。

```typescript
// 通过http请求获取bpmn文件
getPizzaCollaborationBpmn().then((res) => {
  // 使用importXML方法导入bpmn文件
  viewer
    .importXML(res.data)
    .then((result) => {
      const { warnings } = result
      if (warnings.length) {
        console.warn('告警信息:', warnings)
      }
      // 缩放到适合的大小
      const canvas = viewer.get<Canvas>('canvas')
      canvas.zoom('fit-viewport')
    })
    .catch(function (err) {
      const { warnings, message } = err
      console.error('错误信息:', warnings, message)
    })
})
```

完整代码如下:

```vue | pure
<script setup lang="ts">
import { onMounted, type Ref, ref } from 'vue'
import BpmnViewer from 'bpmn-js'
import { getPizzaCollaborationBpmn } from '@/api/bunding'
import type { Canvas } from 'bpmn-js/lib/features/context-pad/ContextPadProvider'

const container: Ref<HTMLCanvasElement | null> = ref(null)

onMounted(() => {
  if (container.value) {
    const viewer = new BpmnViewer({
      container: container.value,
    })
    getPizzaCollaborationBpmn().then((res) => {
      viewer
        .importXML(res.data)
        .then((result) => {
          const { warnings } = result
          if (warnings.length) {
            console.warn('告警信息:', warnings)
          }
          const canvas = viewer.get<Canvas>('canvas')
          canvas.zoom('fit-viewport')
        })
        .catch(function (err) {
          const { warnings, message } = err
          console.error('错误信息:', warnings, message)
        })
    })
  }
})
</script>

<template>
  <div ref="container" class="container"></div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
```

源码地址: [点击查看](https://github.com/39Nyx/bpmn-designer/blob/main/src/views/BundlingView.vue)

演示地址: [点击查看](https://39nyx.github.io/bpmn-designer/bundling)
