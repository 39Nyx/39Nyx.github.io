---
title: DOM操作
order: 2
group:
  title: 脱围机制
  order: 5
---

## 获取指向节点的ref

要访问由`React`管理的`DOM`节点， 首先得引入`useRef` Hook。

```typescript
import { useRef } from 'react'
```

然后, 在你的组件中定义一个`ref`变量

```typescript
import { useRef } from'react'

const myRef = useRef<HTMLDivElement>(null)
```

最后, 将`myRef`作为`ref`属性值传递给需要获取的`DOM`节点的标签

```tsx | pure
<div ref={myRef}></div>
```

`useRef`Hook返回一个对象, 这个对象有一个`current`属性，这个属性最开始的时候是`nulll`， 当组件渲染完成之后， `React`会自动将该节点的引用赋值给`current`属性, 即`myRef.current`相当于指向了真实的`DOM`节点。

```typescript
// 指向真实的DOM节点
console.log(myRef.current)

// 对真实的DOM节点进行操作
myRef.current.style.backgroundColor = 'blue'
myRef.current.addEventListener('click', () => {
  console.log('clicked')
})
```

## 示例

### 使文本宽获取焦点

```tsx
import React, { useRef } from "react";

export default () => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <input
        ref={inputRef}
        placeholder="请输入内容"
      />
      <button onClick={() => {
        inputRef.current?.focus()
      }}>
        获取焦点
      </button>
    </div>
  )
}
```
