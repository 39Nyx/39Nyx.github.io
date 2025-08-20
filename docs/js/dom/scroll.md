---
title: 滚动
order: 3
group:
  title: DOM
---

## scrollTo

使用`scrollTo`方法将元素滚动到页面的指定位置, 参数支持设置`top`、`bottom`, `left`, `right`四个方向的滚动距离, `behavior`参数设置滚动动画效果, 可选值有`auto`、`smooth`、`instant`

<code src="./scrollDemo/scrollTo.vue"></code>

:::info{title=提示}

操作的`dom`元素是父元素, 即带有`overflow: auto`或`overflow: scroll`样式的元素, 而不是子元素

:::
