---
title: WebGL 基础
order: 3
---

## WebGL 介绍

WebGL 程序在屏幕上同时使用`HTML`和`Javascript`|`Typescript`来创建和现实三维图形

## 绘制简单矩行

使用`Canvas`绘制一个矩形，并在屏幕上显示出来

1. 获取 canvas 元素
2. 获取绘制二维图形的上下文
3. 填充颜色，绘制距行

<code src="./demos/Rectangle.tsx"></code>

## 坐标系

<FlowDraw src="/draw/webgl/canvas坐标系.excalidraw" height="600px"></FlowDraw>

如上图所示， `canvas`坐标系统横轴为 x 轴(正方向朝右), 纵轴为 y 轴(正方向朝下), 原点位于左上角

## 清空绘图区

<code src="./demos/HelloCanvas.tsx"></code>

上面示例包含了四个步骤

- 获取 canvas 元素

- 获取 WebGL 绘制上下文, 这里获取上下文调用了`getWebGLContext`方法来获取 WebGL 绘制上下文, 主要用于区分不同浏览器之间的差异

- 设置背景色

- 清空 Canvas

## 绘制一个点(版本1)

<code src="./demos/HelloPoint1/index.tsx"></code>
