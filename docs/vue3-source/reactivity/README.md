---
title: 阅读目录
order: 1
group:
  title: 响应式
  order: 2
---

## 如何阅读 reactivity 包：

- 定位文件: `packages/reactivity/src/`

- 核心文件:

  - `index.ts`: 导出入口。

  - [ref.ts](/vue3-source/reactivity/ref): `ref` 的实现。

  - [reactive.ts](/vue3-source/reactivity/reactive): `reactive`, `shallowReactive`, `readonly`, `shallowReadonly` 的实现。核心是 `createReactiveObject` 和 `Proxy handlers` (`baseHandlers.ts`, `collectionHandlers.ts`)。

  - `effect.ts`: effect 函数 (副作用) 的实现。这是响应式的心脏！ 重点关注 ReactiveEffect 类、track() (依赖收集) 和 trigger() (触发更新)。

  - `computed.ts`: computed 的实现 (基于 effect 和 ref)。

  - `baseHandlers.ts`: 针对 Object/Array 的 Proxy handlers (get, set, deleteProperty 等)。

  - `collectionHandlers.ts`: 针对 Map/Set/WeakMap/WeakSet 的 Proxy handlers。

  - `dep.ts`: 依赖 (Dep) 和管理依赖的集合 (KeyToDepMap)。

  - `operations.ts`: 定义 TrackOpTypes 和 TriggerOpTypes 枚举，用于 track 和 trigger

- 阅读方法

  - 从 API 入手: 找一个你熟悉的 API (比如 ref)，在 ref.ts 中找到它的函数定义，一步步看下去

  - 理解 effect: 重点阅读 effect.ts。理解：
    - 什么是 activeEffect？为什么需要它？
    - track(target, key): 它做了什么？如何建立 target.key -> activeEffect 的映射？
    - trigger(target, key, type): 它根据映射关系找到了什么？如何执行副作用？

  - 理解 Proxy 拦截: 在 baseHandlers.ts 中，看 createGetter (get 拦截) 和 createSetter (set 拦截)。注意它们在 get 中调用 track()，在 set 中调用 trigger()
  - 动手调试
    - 在 packages/vue/examples/ 下创建一个简单的 HTML 文件，引入构建好的 vue.global.js
    - 写一个使用 ref 和 effect 的小例子
    - 在浏览器 DevTools 的 Sources 面板中找到 reactivity 包的源码 (通常需要开启 sourcemap 支持)
    - 在 ref.ts 的 createRef、ref.value 的 getter/setter，effect.ts 的 run 方法、track、trigger 等关键位置设置断点
    - 运行你的例子，观察断点触发时的调用栈、变量值。这是理解流程最有效的方式
  - 画图/笔记: 将 target、key、Dep、ReactiveEffect 之间的关系画出来。记录核心函数的执行流程


## 目录结构

```shell
packages/reactivity/src/
├── collection.ts
├── computed.ts
├── effect.ts
├── index.ts
├── interfaces.ts
├── reactive.ts
├── ref.ts
├── shallowReactive.ts
├── shallowReadonly.ts
├── shallowRef.ts
├── toRaw.ts
├── triggerRef.ts
├── utils.ts
└── warn.ts
```

