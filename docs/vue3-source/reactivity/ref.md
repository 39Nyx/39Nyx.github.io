---
title: Ref
order: 1
group:
  title: 响应式
---

## 案例

运行`pnpm dev`命令, 用于监听构建vue项目, 然后在`packages/vue/examples/reactivity/ref.html`文件中编写一个ref的使用案例，用于调试ref的代码，代码越简单越好。

```html
<script src="../../dist/vue.global.js"></script>

<div id="demo">
  <h1>{{ hello }}</h1>
</div>

<script>
  const { ref } = Vue
  Vue.createApp({
    setup() {
      const hello = ref('Hello World!')
      return { hello }
    },
    mounted() {
      setTimeout(() => {
        this.hello = 'Hello Vue!'
      }, 2000)
    }
  }).mount('#demo')
</script>

<style>
</style>
```

:::info{title=提示}
`pnpm dev`命令必须执行，不然更改`reactivity`的代码不会生效
:::

## Ref



```typescript
/**
 * Takes an inner value and returns a reactive and mutable ref object, which
 * has a single property `.value` that points to the inner value.
 *
 * @param value - The object to wrap in the ref.
 * @see {@link https://vuejs.org/api/reactivity-core.html#ref}
 */
export function ref<T>(
  value: T,
): [T] extends [Ref] ? IfAny<T, Ref<T>, T> : Ref<UnwrapRef<T>, UnwrapRef<T> | T>
export function ref<T = any>(): Ref<T | undefined>
export function ref(value?: unknown) {
  return createRef(value, false)
}
```

## createRef

```typescript
function createRef(rawValue: unknown, shallow: boolean) {
  // 判断是否是RefImpl实例
  if (isRef(rawValue)) {
    return rawValue
  }
  // 创建RefImpl实例
  return new RefImpl(rawValue, shallow)
}
```

## RefImpl

```typescript
/**
 * @internal
 */
class RefImpl<T = any> {
  /**
   * 引用的当前值
   */
  _value: T
  /**
   * 引用变量的原始值
   * @private
   */
  private _rawValue: T

  dep: Dep = new Dep()

  /**
   * 标志属性是否是RefImpl实例
   */
  public readonly [ReactiveFlags.IS_REF] = true
  /**
   * 标志属性, 是否是浅层的Shallow
   */
  public readonly [ReactiveFlags.IS_SHALLOW]: boolean = false

  /**
   *
   * @param value 初始值
   * @param isShallow 标记这个Ref是否是浅层的Shallow
   */
  constructor(value: T, isShallow: boolean) {
    // 获取原始值
    this._rawValue = isShallow ? value : toRaw(value)
    // 获取Reactive值
    this._value = isShallow ? value : toReactive(value)
    this[ReactiveFlags.IS_SHALLOW] = isShallow
  }

  get value() {
    // 开发环境
    if (__DEV__) {
      // 依赖收集
      this.dep.track({
        target: this,
        type: TrackOpTypes.GET,
        key: 'value',
      })
    } else {
      this.dep.track()
    }
    // 直接返回值
    return this._value
  }

  set value(newValue) {
    const oldValue = this._rawValue
    const useDirectValue =
      this[ReactiveFlags.IS_SHALLOW] ||
      isShallow(newValue) ||
      isReadonly(newValue)
    newValue = useDirectValue ? newValue : toRaw(newValue)
    // 判断值是否有变化
    if (hasChanged(newValue, oldValue)) {
      // 更新原始值
      this._rawValue = newValue
      // 更新Reactive值
      this._value = useDirectValue ? newValue : toReactive(newValue)
      if (__DEV__) {
        // 开发环境触发依赖收集
        this.dep.trigger({
          target: this,
          type: TriggerOpTypes.SET,
          key: 'value',
          newValue,
          oldValue,
        })
      } else {
        // 触发依赖收集
        this.dep.trigger()
      }
    }
  }
}
```
