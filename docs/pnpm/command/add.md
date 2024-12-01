---
group:
  title: cli 命令
  order: 1
title: pnpm add命令
order: 2
---

## 使用

## --workspace

仅添加在工作空间中找到的依赖项

例如 workspace 中有两个包：

```html
packages
├── foo
│   └── package.json
└── bar
    └── package.json
```

需要将bar添加到foo的依赖项中：

```bash
pnpm add bar --filter=foo --workspace
```

如果不带上`--workspace`参数的话，会从远程仓库下载依赖项。


