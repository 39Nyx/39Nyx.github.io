---
title: 锚点滚动
order: 1
group:
  title: DOM
  order: 3
---

## 简介

`scrollIntoView`是`JavaScript`中的一个方法，可以将元素滚动到浏览器可视区域内。这个方法通常用于页面上自动滚动到某个特定元素， 确保用户能够看到该元素

基本用法

```javascript
const element = document.getElementById('myElement')
element.scrollIntoView();
```

## 参数

`scrollIntoView`方法可以接收一个参数, 用户控制滚动到行为, 这个参数是一个对象, 包含以下两个可选属性:

1. `behavior`: 指定滚动到行为, 可以是`auto(默认)`或者`smooth(平滑滚动到目标元素)`
2. `block`: 指定元素在视口中的垂直对齐方式, 可以是`start(顶部对齐)`、`center(居中对齐)`、`end(底部对齐)`、`nearest(根据当前滚动位置, 选择最近的对齐方式)`
3. `inline`: 指定元素在视口中的水平对齐方式, 可以是`start(左侧对齐)`、`center(水平居中对齐)`、`end(右侧对齐)`、`nearest(根据当前滚动位置，选择最近的对齐方式)`

## 示例

### 水平对齐

<code src="./demos/InlineAlign/index.tsx"></code>
