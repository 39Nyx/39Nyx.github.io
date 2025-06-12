---
title: Vue3 源码解析
order: 1
---

📌 核心策略：分模块、抓核心、动手实践

## 🧱 打好基础

### 掌握 Vue 3 应用开发

- 熟练使用 Vue 3 的 Options API 和 Composition API (setup, ref, reactive, computed, watch, 生命周期钩子等)
- 理解组件、Props、事件、插槽、依赖注入等核心概念
- 了解 Vue Router 和 Vuex/Pinia 的基本使用

### 掌握 TypeScript

- Vue 3 源码完全使用 TypeScript 编写。你需要熟悉基础类型、接口、泛型、类、装饰器等概念

### 掌握现代 JavaScript (ES6+)

- 箭头函数、模块化 (import/export)、解构、Promise、async/await、Proxy、Map/Set 等

### 了解核心概念

- 响应式原理: 理解 ref, reactive 的作用和区别，知道依赖收集和触发更新的基本思想。 

- 虚拟DOM (Virtual DOM) 和 Diff 算法: 了解它们存在的意义和基本原理。 

- 编译器 (Compiler): 知道 .vue 单文件组件会被编译成什么。 

- 运行时 (Runtime): 理解渲染器、组件实例、调度等概念

## 🛠 搭建环境和准备工作

### 获取源码

```shell
git clone https://github.com/vuejs/core.git
cd core
```

### 安装依赖

```shell
pnpm install
```

### 熟悉项目结构 (关键!)

- `packages/` 目录是核心

  - `reactivity/`: 响应式系统核心 (`ref`, `reactive`, `effect`, `computed`)。**这是最佳起点！**
  
  - `runtime-core/`: 运行时核心 (组件实例化、生命周期、虚拟DOM渲染、调度)。与平台无关。
  
  - `runtime-dom/`: 针对浏览器的运行时 (DOM操作、事件、属性处理)。基于 `runtime-core`。
  
  - `compiler-core/`: 编译器核心 (解析、转换、代码生成)。平台无关。
  
  - `compiler-dom/`: 针对浏览器的编译器。基于 `compiler-core`。
  
  - `shared/`: 多个包共享的工具函数和常量
  
  - `vue/`: 构建最终 `vue` 包的入口 (整合 `runtime-dom` 和 `compiler`)
  
- `scripts/`: 构建和发布脚本

- `test-dts/`: 类型声明测试

- `packages/vue/examples/`: 一些官方示例

### 构建源码 (可选但推荐)

- 查看 `package.json` 中的 `scripts`。通常运行 `pnpm run build` 或 `pnpm run dev` (用于开发监听模式) 来构建整个项目或特定包
- 构建后，`packages/vue/dist/` 下会生成 `vue.global.js` 等文件

## 🎯 选择切入点 - 从响应式开始 (reactivity 包)

### 为什么从这里开始？

- 它是 Vue 最核心、最具创新性的部分。

- 相对独立，不依赖编译器或复杂的运行时渲染逻辑。

- 代码量适中，概念相对集中 (ref, reactive, effect, track, trigger, computed)。

- 你每天都在使用它，有直接的感性认识。

### 如何阅读 reactivity 包：

- 定位文件: packages/reactivity/src/

- 核心文件:

  - index.ts: 导出入口。

  - ref.ts: ref 的实现。

  - reactive.ts: reactive, shallowReactive, readonly, shallowReadonly 的实现。核心是 createReactiveObject 和 Proxy handlers (baseHandlers.ts, collectionHandlers.ts)。

  - effect.ts: effect 函数 (副作用) 的实现。这是响应式的心脏！ 重点关注 ReactiveEffect 类、track() (依赖收集) 和 trigger() (触发更新)。

  - computed.ts: computed 的实现 (基于 effect 和 ref)。

  - baseHandlers.ts: 针对 Object/Array 的 Proxy handlers (get, set, deleteProperty 等)。

  - collectionHandlers.ts: 针对 Map/Set/WeakMap/WeakSet 的 Proxy handlers。

  - dep.ts: 依赖 (Dep) 和管理依赖的集合 (KeyToDepMap)。

  - operations.ts: 定义 TrackOpTypes 和 TriggerOpTypes 枚举，用于 track 和 trigger

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

## 🌉 探索运行时核心 (runtime-core 包)

### 在理解响应式后，进入运行时会更容易

### 关注点

- 组件实例 (component.ts): 理解 createComponentInstance 和 setupComponent。组件实例有哪些关键属性 (props, setupState, ctx, vnode, render, proxy 等)？

- 虚拟DOM (vnode.ts): 理解 VNode 对象的结构。

- 渲染器 (renderer.ts): 这是运行时的核心！ 重点关注 createRenderer 函数返回的 render 和 createApp API。理解 patch 函数及其内部的 processElement, processComponent, mountComponent, updateComponent 等。理解 Diff 算法的大致思路 (主要在 patchKeyedChildren 函数中)。

- 调度 (scheduler.ts): Vue 如何批量更新？queueJob 和 queuePostFlushCb 的作用？nextTick 的实现？

- 生命周期: 生命周期钩子是如何在组件实例化、更新过程中被调用的？(查找 callHook 调用)。

### 阅读方法:

- 跟踪组件挂载流程: 从 createApp 开始 -> mount -> render(vnode, container) -> patch(null, vnode, ...) -> mountComponent -> createComponentInstance -> setupComponent (处理 setup 函数/Options, 初始化响应式状态等) -> setupRenderEffect (创建组件的渲染 effect) -> 执行渲染 effect (调用组件的 render 函数) -> 生成子 VNode -> patch 子 VNode -> ... 递归直到真实 DOM 挂载。

- 调试组件更新: 创建一个响应式数据变化的组件，调试更新流程：数据改变 -> 触发 trigger -> 执行组件的渲染 effect (因为依赖了该数据) -> 重新调用 render 函数生成新 VNode -> patch(oldVNode, newVNode) -> Diff -> 更新 DOM。

- 结合模板/JSX: 思考你写的模板或 JSX 是如何最终变成 render 函数并执行的。

## ⚙ 了解编译器 (compiler-core 包 - 可选，较复杂)

### 理解目标

- 编译器如何将模板字符串或单文件组件中的` <template>` 编译成 `render` 函数？

### 大致流程

- 解析 (Parse): 将模板字符串解析成 抽象语法树 (AST)。查看 parser.ts。

- 转换 (Transform): 对 AST 进行各种转换和优化。查看 transform.ts 和各种转换器 (transformElement, transformOn, vBind, vModel 等)。例如，将 v-on:click 转换为 onClick 属性，将 v-bind:title 转换为 title 属性，处理指令等。

- 代码生成 (Codegen): 将优化后的 AST 生成 render 函数的代码字符串 (通常是返回 h 或 _createElementVNode 调用的代码)。查看 codegen.ts。

### 阅读方法

- 使用官方提供的 模板导出工具 输入模板，观察生成的 render 函数代码。

- 在编译器的 compile 函数 (compile.ts) 入口设置断点，输入一个简单模板字符串，单步调试，观察 AST 的生成、转换过程以及最终代码的生成。

## 📚 利用资源


### 官方文档:

- Vue 3 官方文档 (特别是深入指南部分)。

- Vue 3 迁移指南 解释了与 Vue 2 的不同，有助于理解设计决策。

### 优秀的源码解析文章/系列:

- 搜索 "Vue 3 源码解析"、"Vue 3 reactivity 原理"、"Vue 3 runtime 解析" 等关键词，有很多中文精品文章。

- Anthony Fu 的 Vue Reactivity Transform 系列 (英文)。

### 书籍:

- 《Vue.js设计与实现》 (霍春阳) - 国内最好的Vue源码解析书籍，覆盖Vue 3。

### 视频课程: 

- B站、Udemy 等平台有专门的 Vue 3 源码解析课程。

### Vue RFCs

- 在 Vue RFCs 仓库 查看 Vue 3 新特性的设计讨论和决策过程，了解为什么这样实现。

### Issue 和 PR

- 遇到难以理解的地方，可以尝试在 Vue GitHub 仓库的 Issues 或 Pull Requests 中搜索相关讨论。

## 📝 重要建议

- 不要试图一口吃成胖子: 不要期望短时间内理解所有代码。分模块、分功能攻克。

- 带着问题去阅读: "ref.value 赋值后，界面是怎么更新的？" 比漫无目的地看代码效率高得多。

- 调试是最好的老师: 90%的理解障碍可以通过在关键位置打断点、观察执行流程和变量状态来解决。务必动手调试！

- 善用搜索: 在项目内使用 IDE 的全局搜索 (Ctrl+Shift+F / Cmd+Shift+F) 查找函数定义、引用、类型声明。

- 关注测试 (__tests__/): 测试用例是理解某个函数或模块预期行为的绝佳文档。阅读某个文件的源码时，先看看它的测试用例。

- 理解 > 记忆: 重点是理解设计思想、数据流、核心算法和关键抽象。不必记住每一行代码。

- 做笔记和画图: 用图表理清模块关系、类关系、核心流程（响应式依赖收集/触发、组件挂载/更新流程）。

- 参与社区: 遇到问题，在 Stack Overflow、Vue 论坛、相关技术群提问。

- 保持耐心和毅力: 阅读大型框架源码是挑战，遇到困难很正常。坚持下来，收获巨大！

## 📌 你的学习小目标清单


|    阶段     |	核心任务 |	推荐动作 |
|:---------:| :---: | :---: |
| **基础准备**  |	掌握Vue 3应用开发	| 用Composition API写3个小项目 |
|           | 学习TypeScript基础	| 完成TS官方Handbook基础部分 |
| **环境搭建**  | 克隆源码并安装依赖		| git clone... + pnpm install |
|           |    熟悉项目结构 |  重点查看packages/reactivity目录 |
| **核心突破**  | 阅读reactivity模块 | 从ref.ts → effect.ts → reactive.ts顺序 |
|           | 动手调试响应式流程 | 	在Chrome中调试value setter触发更新 |
| **运行时探索** | 阅读runtime-core | 跟踪createApp到mountComponent全流程 |
|           | 调试组件更新 | 观察数据变更到DOM更新的完整链路 |

**记住**： 从 reactivity 开始，大量使用调试，理解核心流程而非所有细节。祝你源码阅读之旅顺利，收获满满！当你第一次清晰地看到自己修改的响应式数据如何触发视图更新时，那种顿悟的喜悦会是最好的回报！💪
