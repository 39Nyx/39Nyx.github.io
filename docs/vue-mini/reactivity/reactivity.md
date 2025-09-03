---
title: reactivity
order: 1
group:
  title: 响应式
  order: 1
---

## reactive

```typescript
import { mutableHandlers } from "./baseHandlers";

export const reactiveMap = new WeakMap< object, any>()

export function reactive(target: object) {
  return createReactiveObject(target, mutableHandlers , reactiveMap)
}

export function createReactiveObject(target: object, baseHandlers: ProxyHandler<any>, proxyMap: WeakMap<object, any>) {
  const exitProxy = proxyMap.get(target)
  if (exitProxy) {
    return exitProxy
  }
  const proxy = new Proxy(target, baseHandlers)
  proxyMap.set(target, proxy)
  return proxy
}
```

## mutableHandlers

`mutableHandlers`方法实现

```typescript
import { track, trigger } from "./effect";

function createGetter() {
  return function (target: any, key: string | symbol, receiver: any) {
    const res = Reflect.get(target, key, receiver)
    track(target, key)
    return res
  }
}

const get = createGetter()


function createSetter() {
  return function set(target: any, key: string | symbol, value: any, receiver: any) {
    const res = Reflect.set(target, key, value, receiver)
    trigger(target, key, value)
    return res
  }
}

const set = createSetter()

export const mutableHandlers: ProxyHandler<any> = {
  get,
  set
}

function aa() {
  return function abc() {
    return 1
  }
}
```

## effect

`effect`文件方法简单实现

```typescript
export function track(target: any, key: unknown) {
  console.log('track')
}

export function trigger(target: any, key: unknown, value: any) {
  console.log('trigger')
}
```
