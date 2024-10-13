---
title: 自定义配置
group:
  title: WebStorm 配置
  order: 2
---

## 自定义配置

## import can be shortened

在一些 monorepo 项目中, 我们在 package 里面在 import 的时候使用相对路径，但是 Webstorm 会推荐使用别名，即绝对路径，不使用就会出现告警，对于强迫症患者来说，太难受了

可以在“File | Settings | Editor | Inspections | JavaScript and TypeScript | General" -> 取消勾选 "Import can be shortened"

![](./images/unShortened.png)
