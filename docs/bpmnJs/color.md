---
title: 节点颜色
order: 3
---

此案例讲讲述如何为 BPMN 图形中的节点设置颜色。

更改节点颜色这里主要介绍前三种方式， 第四种方式暂不在这里介绍

1. 在节点的位置覆盖一个透明颜色背景的元素，然后设置元素的颜色
2. 通过BPMNn内置的`setCOlor`方法设置节点的颜色, 只有在`Modeler`模式下才能使用， `Viewer`模式下无法使用
3. 通过给节点添加class属性，然后通过CSS设置节点的颜色
4. 通过自定义节点更改其样式，具体方法请参考[自定义节点样式]

## 简单创建流程图

```vue
<script setup lang="ts">
  import { onMounted, type Ref, ref } from 'vue'
  import Viewer from 'bpmn-js/lib/Modeler'
  import { getPizzaCollaborationBpmnColor } from '@/api/color'
  import type { Canvas } from 'bpmn-js/lib/features/context-pad/ContextPadProvider'
  // 左边工具栏以及编辑节点的样式
  import 'bpmn-js/dist/assets/diagram-js.css'
  import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
  import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
  import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

  const container: Ref<null | HTMLDivElement> = ref(null)

  onMounted(() => {
    if (container.value) {
      const viewer = new Viewer({
        container: container.value,
      })

      // 请求bpmn文件
      getPizzaCollaborationBpmnColor().then((res) => {
        viewer
          .importXML(res.data)
          .then(() => {
            viewer.get<Canvas>('canvas').zoom('fit-viewport')
            // 三种更改颜色的方式
            changeColorByOverlay(viewer)
            changeColorByExtension(viewer)
            changeColorByMarker(viewer)
          })
          .catch((err) => {
            console.error(err)
          })
      })
    }
  })
</script>

<template>
  <div ref="container" class="container"></div>
</template>

<style scoped>
</style>
```

## Overlay 方式

这种方式是最简单的一种，只需要在节点的位置覆盖一个透明颜色背景的元素，然后设置元素的颜色即可， 不过也有缺点， 就是节点被遮挡， 节点上的文字无法复制。

```typescript
import Viewer from 'bpmn-js/lib/Modeler'
import { getPizzaCollaborationBpmnColor } from '@/api/color'
import type { ElementRegistry } from 'bpmn-js/lib/features/auto-place/BpmnAutoPlaceUtil'
import type { ElementLike } from 'diagram-js/lib/model/Types'
import type Overlays from 'diagram-js/lib/features/overlays/Overlays'

/**
 * 更改颜色通过覆盖层
 * @param viewer
 */
function changeColorByOverlay(viewer: Viewer) {
  const elementRegistry: ElementRegistry = viewer.get<ElementRegistry>('elementRegistry')
  const overlays = viewer.get<Overlays>('overlays')
  const shape: ElementLike | undefined = elementRegistry.get('CalmCustomerTask')
  if (shape) {
    const div: HTMLDivElement = document.createElement('div')
    div.style.width = shape.width + 'px'
    div.style.height = shape.height + 'px'
    div.className = 'highlight-overlay'

    overlays.add('CalmCustomerTask', {
      position: {
        top: 0,
        left: 0,
      },
      html: div,
    })
  }
}
```

在通过css设置div的颜色

```scss
:deep(.highlight-overlay) {
  background-color: green;
  opacity: 0.4;
  pointer-events: none;
  border-radius: 10px;
}
```

## setColor 方法

BPMN 内置的`setColor`方法可以设置节点的颜色， 但是只有在`Modeler`模式下才能使用， `Viewer`模式下无法使用。

```typescript
import Viewer from 'bpmn-js/lib/Modeler'
import type { ElementRegistry } from 'bpmn-js/lib/features/auto-place/BpmnAutoPlaceUtil'
import type Modeling from 'bpmn-js/lib/features/modeling/Modeling'
import type { Element } from 'bpmn-js/lib/model/Types'

/**
 * 更改颜色通过modeling扩展
 * @param viewer
 */
function changeColorByExtension(viewer: Viewer) {
  const elementRegistry: ElementRegistry = viewer.get<ElementRegistry>('elementRegistry')
  const elementToColor = elementRegistry.get('SelectAPizzaTask') as Element
  const modeling = viewer.get<Modeling>('modeling')
  if (elementToColor) {
    modeling.setColor([elementToColor], {
      stroke: 'green',
      fill: 'rgb(152, 203, 152)',
    })
  }
}
```


这里要注意的是`Viewer`是从`bpmn-js/lib/Modeler`导入的，而不是从`bpmn-js/lib/Viewer`导入的。`import Viewer from 'bpmn-js/lib/Viewer'`或者`import Viewer from 'bpmn-js'`引入`Viewer`在`viewer.get<Modeling>('modeling')`的时候会报错。

## class 方式

这种方式是通过给节点添加class属性，然后通过CSS设置节点的颜色。

```typescript
import Viewer from 'bpmn-js/lib/Modeler'
import type { Canvas } from 'bpmn-js/lib/features/context-pad/ContextPadProvider'

/**
 * 设置节点的颜色
 * @param viewer
 */
function changeColorByMarker(viewer: Viewer) {
  const canvas = viewer.get<Canvas>('canvas')
  canvas.addMarker('OrderReceivedEvent', 'highlight')
}
```

然后通过css的颜色

```scss
:deep(.highlight) {
  &:not(.djs-connection) .djs-visual > :nth-child(1) {
    fill: green !important;
  }
}
```

## 完整代码

下面是上面案例的完整代码

```vue
<script setup lang="ts">
import { onMounted, type Ref, ref } from 'vue'
import Viewer from 'bpmn-js/lib/Modeler'
import { getPizzaCollaborationBpmnColor } from '@/api/color'
import type { Canvas } from 'bpmn-js/lib/features/context-pad/ContextPadProvider'
import type { ElementRegistry } from 'bpmn-js/lib/features/auto-place/BpmnAutoPlaceUtil'
import type { ElementLike } from 'diagram-js/lib/model/Types'
import type Overlays from 'diagram-js/lib/features/overlays/Overlays'
import type Modeling from 'bpmn-js/lib/features/modeling/Modeling'
import type { Element } from 'bpmn-js/lib/model/Types'
// 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

const container: Ref<null | HTMLDivElement> = ref(null)

/**
 * 更改颜色通过覆盖层
 * @param viewer
 */
function changeColorByOverlay(viewer: Viewer) {
  const elementRegistry: ElementRegistry = viewer.get<ElementRegistry>('elementRegistry')
  const overlays = viewer.get<Overlays>('overlays')
  const shape: ElementLike | undefined = elementRegistry.get('CalmCustomerTask')
  if (shape) {
    const div: HTMLDivElement = document.createElement('div')
    div.style.width = shape.width + 'px'
    div.style.height = shape.height + 'px'
    div.className = 'highlight-overlay'

    overlays.add('CalmCustomerTask', {
      position: {
        top: 0,
        left: 0,
      },
      html: div,
    })
  }
}

/**
 * 更改颜色通过modeling扩展
 * @param viewer
 */
function changeColorByExtension(viewer: Viewer) {
  const elementRegistry: ElementRegistry = viewer.get<ElementRegistry>('elementRegistry')
  const elementToColor = elementRegistry.get('SelectAPizzaTask') as Element
  const modeling = viewer.get<Modeling>('modeling')
  console.log(modeling)
  console.log(elementToColor)
  if (elementToColor) {
    modeling.setColor([elementToColor], {
      stroke: 'green',
      fill: 'rgb(152, 203, 152)',
    })
  }
}

/**
 * 设置节点的颜色
 * @param viewer
 */
function changeColorByMarker(viewer: Viewer) {
  const canvas = viewer.get<Canvas>('canvas')
  canvas.addMarker('OrderReceivedEvent', 'highlight')
}

onMounted(() => {
  if (container.value) {
    const viewer = new Viewer({
      container: container.value,
    })

    getPizzaCollaborationBpmnColor().then((res) => {
      viewer
        .importXML(res.data)
        .then(() => {
          viewer.get<Canvas>('canvas').zoom('fit-viewport')
          changeColorByOverlay(viewer)
          changeColorByExtension(viewer)
          changeColorByMarker(viewer)
        })
        .catch((err) => {
          console.error(err)
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

:deep(.highlight-overlay) {
  background-color: green;
  opacity: 0.4;
  pointer-events: none;
  border-radius: 10px;
}

:deep(.highlight) {
  &:not(.djs-connection) .djs-visual > :nth-child(1) {
    fill: green !important; /* color elements as green */
  }
}
</style>
```

演示地址: [点击查看](https://39nyx.github.io/bpmn-designer/color)

源码地址： [点击查看](https://github.com/39Nyx/bpmn-designer/blob/main/src/views/ColorView.vue)
