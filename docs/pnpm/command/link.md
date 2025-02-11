---
group:
  title: cli 命令
  order: 1
title: pnpm link命令
order: 3
---

## 使用

将本地库链接到全局, 执行该命令需要再本地库的根目录下执行(即 `package.json` 所在的目录)。

```shell [pnpm]
pnpm link --global
```

查看是否链接成功

```shell [pnpm]
pnpm list --global --dept 0
```

在其他项目中使用

```shell [pnpm]
pnpm link <package-name> --global
```
