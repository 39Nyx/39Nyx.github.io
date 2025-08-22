---
title: Docker Compose
order: 4
---

`Docker Compose` 文件的默认后缀是 `.yml` 或 `.yaml`（两者均可）, 推荐使用`.yml` 后缀。

## 配置

### version

`version` 字段用于指定 `Docker Compose` 配置文件的语法版本，它决定了你可以使用哪些功能和配置选项。不同版本的 `Docker Compose` 支持不同的功能和语法结构。

例如:

-  version: '2'支持 `networks`和 `volumes`的显式定义。

- version: '3'引入了 `deploy`配置（用于 `Swarm` 模式）。

- version: '3.8'支持更多新特性（如 `name`字段定义项目名称）。
