---
title: createApp
order: 2
group:
  title: 基础
  order: 1
---

## 用法

`createApp`一般有两种用法

在普通的html文件中使用, 例如:

```html
<script src="../../dist/vue.global.js"></script>

<div id="demo">
  <h1>Latest Vue.js Commits</h1>
  <template v-for="branch in branches">
    <input
      type="radio"
      :id="branch"
      :value="branch"
      name="branch"
      v-model="currentBranch"
    />
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>vuejs/core@{{ currentBranch }}</p>
  <ul>
    <li v-for="{ html_url, sha, author, commit } in commits">
      <a :href="html_url" target="_blank" class="commit"
        >{{ sha.slice(0, 7) }}</a
      >
      - <span class="message">{{ truncate(commit.message) }}</span><br />
      by
      <span class="author"
        ><a :href="author.html_url" target="_blank"
          >{{ commit.author.name }}</a
        ></span
      >
      at <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul>
</div>

<script>
  const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`

  Vue.createApp({
    data: () => ({
      branches: ['main', 'v2-compat'],
      currentBranch: 'main',
      commits: null,
    }),

    created() {
      this.fetchData()
    },

    watch: {
      currentBranch: 'fetchData',
    },

    methods: {
      fetchData() {
        fetch(`${API_URL}${this.currentBranch}`)
          .then(res => res.json())
          .then(data => {
            this.commits = data
          })
      },
      truncate(v) {
        const newline = v.indexOf('\n')
        return newline > 0 ? v.slice(0, newline) : v
      },
      formatDate(v) {
        return v.replace(/T|Z/g, ' ')
      },
    },
  }).mount('#demo')
</script>
```

通过cli工具创建项目，在`main.ts`中使用:

```typescript
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
```

## 源码分析

`createApp`方法的源码位于`packages/runtime-dom/src/index.ts`

`createApp`省略其他代码，大致结构如下

```typescript
export const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args)
  // 省略部分代码
  return app
}) as CreateAppFunction<Element>
```

如果这个还看不懂，那么可以改写成这样

```typescript
const originalCreateApp = (...args) => {
  const app = ensureRenderer().createApp(...args)
  // 省略部分代码
  return app
}

export const createApp = originalCreateApp as CreateAppFunction<Element>
```

`ensureRenderer()` 会确保渲染器已经实例化，如果没有，就创建一个新的渲染器。

```typescript
function ensureRenderer() {
  return (
    renderer ||
    (renderer = createRenderer<Node, Element | ShadowRoot>(rendererOptions))
  )
}
```

`createApp(...args)` 方法，它用于创建一个新的 Vue 应用实例

创建好`app`实例后, 会检测是否是开发环境，如果是开发环境，会对标签进行检测和注入相应的警告信息

```typescript
if (__DEV__) {
  /**
   * 向创建的 Vue 应用程序 app 注入一个检查原生标签的功能
   * 会在应用程序的配置中添加一个 isNativeTag 函数，用于验证组件名称是否为 HTML、SVG 或 MathML 的标准标签
   * 在开发阶段提供的一个工具，帮助开发者确保使用正确的标签，避免潜在的错误
   */
  injectNativeTagCheck(app)
  /**
   * 检查编译器选项并向应用程序注入相应的警告信息
   * 如果在开发模式下使用了 compilerOptions，则这个函数会发出警告提示，说明该选项在运行时仅在使用具有完整编译能力的 Vue.js 构建时生效，而在运行时构建中则应通过其他方式传递给编译器
   */
  injectCompilerOptionsCheck(app)
}
```


在这之后，保留原本对`mount`方法的调用, 并重构`mount`方法

```typescript
  // 解构赋值
const { mount } = app
// 定义新的 mount 方法，用于挂载组件
app.mount = (containerOrSelector: Element | ShadowRoot | string): any => {
  // 使用 normalizeContainer 函数将传入的容器或选择器标准化为一个实际的 DOM 元素。如果标准化结果为 null，则立即返回，结束函数执行
  const container = normalizeContainer(containerOrSelector)
  if (!container) return

  // 获取组件
  const component = app._component
 
  // 检查组件是否有效。如果组件既不是函数，也没有 render 方法或 template，则设置template 属性为 container.innerHTML
  if (!isFunction(component) && !component.render && !component.template) {
    // __UNSAFE__
    // Reason: potential execution of JS expressions in in-DOM template.
    // The user must make sure the in-DOM template is trusted. If it's
    // rendered by the server, the template should not contain any user data.
    component.template = container.innerHTML
    /**
     * 如果处于兼容模式和开发模式，并且容器是一个元素节点，则进行兼容性检查。
     * 这部分代码循环遍历容器的属性，检查一些特定属性（如 v-cloak 和以 v-、:、@ 开头的属性）。
     * 如果发现不安全的属性，则使用 warnDeprecation 函数进行警告提示。
     */
    if (__COMPAT__ && __DEV__ && container.nodeType === 1) {
      for (let i = 0; i < (container as Element).attributes.length; i++) {
        const attr = (container as Element).attributes[i]
        if (attr.name !== 'v-cloak' && /^(v-|:|@)/.test(attr.name)) {
          compatUtils.warnDeprecation(
            DeprecationTypes.GLOBAL_MOUNT_CONTAINER,
            null,
          )
          break
        }
      }
    }
  }

  // 在挂载之前，清空容器的内容，以避免旧内容影响新的渲染。
  if (container.nodeType === 1) {
    container.textContent = ''
  }
  // 调用原来的 mount 方法，传入容器和是否是静态渲染的参数
  const proxy = mount(container, false, resolveRootNamespace(container))
  // 如果容器是一个元素，将其 v-cloak 属性移除，并设置一个 data-v-app 属性，以便 Vue 应用能够正常识别该容器
  if (container instanceof Element) {
    container.removeAttribute('v-cloak')
    container.setAttribute('data-v-app', '')
  }
  // 返回挂载的代理对象，以便后续操作。
  return proxy
}
```

`if (!isFunction(component) && !component.render && !component.template)`这个判断条件只有在`html`使用才执行, 也就是上面说的第一种用法

```html
<script src="../../dist/vue.global.js"></script>

<div id="demo">
  <h1>Latest Vue.js Commits</h1>
</div>

<script>
  Vue.createApp({
    data: () => ({})
  }).mount('#demo')
</script>
```

对于第二种用法, 是自带`render`函数

```typescript
import App from './App.vue'

// 这里APP是一个vue组件，自带了render函数,所以不会进入到isFunction(component) && !component.render && !component.template这个判断条件
createApp(App).mount('#app')
```

`const proxy = mount(container, false, resolveRootNamespace(container))`大致包括了创建vNode和上树, 这些后续会介绍


最后，返回`app`实例

```typescript
return app
```

完整代码如下

```typescript
export const createApp = ((...args) => {
  /**
   * 创建一个新的 Vue 应用实例。
   * 在这个过程中，它首先确保渲染器已经实例化，如果没有，就创建一个新的渲染器。
   * 随后，通过该渲染器调用 createApp 方法，传入用户提供的参数以生成新的应用实例。
   * 这个操作是 Vue 应用程序启动的基础，后续可以在这个实例上进行各种配置和操作，比如挂载组件、注册插件等
   * ensureRenderer() 会确保渲染器已经实例化，如果没有，就创建一个新的渲染器。
   * createApp(...args) 是一个方法，它用于创建一个新的 Vue 应用实例
   */
  const app = ensureRenderer().createApp(...args)

  if (__DEV__) {
    /**
     * 向创建的 Vue 应用程序 app 注入一个检查原生标签的功能
     * 会在应用程序的配置中添加一个 isNativeTag 函数，用于验证组件名称是否为 HTML、SVG 或 MathML 的标准标签
     * 在开发阶段提供的一个工具，帮助开发者确保使用正确的标签，避免潜在的错误
     */
    injectNativeTagCheck(app)
    /**
     * 检查编译器选项并向应用程序注入相应的警告信息
     * 如果在开发模式下使用了 compilerOptions，则这个函数会发出警告提示，说明该选项在运行时仅在使用具有完整编译能力的 Vue.js 构建时生效，而在运行时构建中则应通过其他方式传递给编译器
     */
    injectCompilerOptionsCheck(app)
  }

  // 解构赋值
  const { mount } = app
  // 定义新的 mount 方法，用于挂载组件
  app.mount = (containerOrSelector: Element | ShadowRoot | string): any => {
    // 使用 normalizeContainer 函数将传入的容器或选择器标准化为一个实际的 DOM 元素。如果标准化结果为 null，则立即返回，结束函数执行
    const container = normalizeContainer(containerOrSelector)
    if (!container) return

    // 获取组件
    const component = app._component
    // 检查组件是否有效。如果组件既不是函数，也没有 render 方法或 template，则设置template 属性为 container.innerHTML
    if (!isFunction(component) && !component.render && !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML
      /**
       * 如果处于兼容模式和开发模式，并且容器是一个元素节点，则进行兼容性检查。
       * 这部分代码循环遍历容器的属性，检查一些特定属性（如 v-cloak 和以 v-、:、@ 开头的属性）。
       * 如果发现不安全的属性，则使用 warnDeprecation 函数进行警告提示。
       */
      if (__COMPAT__ && __DEV__ && container.nodeType === 1) {
        for (let i = 0; i < (container as Element).attributes.length; i++) {
          const attr = (container as Element).attributes[i]
          if (attr.name !== 'v-cloak' && /^(v-|:|@)/.test(attr.name)) {
            compatUtils.warnDeprecation(
              DeprecationTypes.GLOBAL_MOUNT_CONTAINER,
              null,
            )
            break
          }
        }
      }
    }

    // 在挂载之前，清空容器的内容，以避免旧内容影响新的渲染。
    if (container.nodeType === 1) {
      container.textContent = ''
    }
    // 调用原来的 mount 方法，传入容器和是否是静态渲染的参数
    const proxy = mount(container, false, resolveRootNamespace(container))
    // 如果容器是一个元素，将其 v-cloak 属性移除，并设置一个 data-v-app 属性，以便 Vue 应用能够正常识别该容器
    if (container instanceof Element) {
      container.removeAttribute('v-cloak')
      container.setAttribute('data-v-app', '')
    }
    // 返回挂载的代理对象，以便后续操作。
    return proxy
  }

  return app
}) as CreateAppFunction<Element>
```
