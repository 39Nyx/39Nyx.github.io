---
title: 折叠面板
order: 1
group:
  title: 动画
  order: 3
---

## 折叠面板

<code src="./demos/Collapse/index.tsx"></code>

`getBoundingClientRect()`方法的作用

获取元素的尺寸信息：当内容高度被设置为auto后，调用getBoundingClientRect()可以获取内容的实际高度，这对于后续将内容的高度设置为实际高度以实现平滑的展开效果至关重要

强制浏览器重新计算布局：在将内容的高度设置为0px后再次调用getBoundingClientRect()，这实际上是为了确保在浏览器应用了新的样式（即height = 0px）后，能够正确地获取到最新的布局信息。这种技巧在某些情况下可以避免CSS过渡效果中的问题，确保内容能够平滑地从折叠状态到展开状态
