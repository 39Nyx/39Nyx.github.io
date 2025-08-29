---
title: peerDependencies
order: 3
group:
  title: 配置
---

## peerDependencies

`peerDependencies`的作用是声明当前包与宿主环境的兼容性依赖关系。它的核心目的是解决插件、库或工具与宿主项目之间的版本兼容性问题，而非直接安装依赖。

### 主要作用

- 避免重复安装: 当你的包（如插件）需要依赖另一个包（如框架 React、Vue或 Webpack）时，通过 `peerDependencies` 声明，可以确保宿主项目（用户的项目）直接安装依赖，而不是在你的插件中重复安装。这能减少项目体积和潜在的版本冲突

- 版本兼容性检查: 包管理器（如 npm/yarn/pnpm）在安装时，会检查宿主项目中是否安装了 `peerDependencies` 指定的包，并验证版本是否符合要求。如果不符合，会发出警告（或错误，取决于包管理器版本）

- 明确运行时环境要求: 向用户传达：“我的包需要运行在某个特定环境（如 React 18 以上）中”，用户需自行确保环境满足要求

### 基础配置语法

基础配置语法如下：

```json
{
  "name": "your-package",
  "peerDependencies": {
    "宿主依赖包名": "版本范围",
    "react": "^18.0.0",
    "vue": ">=3.0.0 <4.0.0"
  }
}
```

#### 精确版本

```json
{
  "peerDependencies": {
    "lodash": "4.17.21"  // 严格要求 4.17.21 版本
  }
}
```

适用场景：极少数需要锁定具体版本的场景（通常不推荐）

#### 兼容范围

|        语法         |             含义              |                 示例说明                  |
|:-----------------:|:---------------------------:|:-------------------------------------:|
|      ^18.2.0      |  允许 18.2.0 及以上，但低于 19.0.0   |           接受 18.2.1, 18.9.0           |
|      ~18.2.0      |  允许 18.2.0 及以上，但低于 18.3.0   |          接受 18.2.9，拒绝 18.3.0          |
|     >=16.8.0      |         最低版本 16.8.0         |               接受所有更高版本                |
|     <=19.0.0      |         最高版本 19.0.0         |                   -                   |
|  >17.0.0 <18.1.0  |            组合范围             |           如 17.1.0到 18.0.9            |
|       16.x        |        所有 16.x.x 版本         |          接受 16.0.0-16.99.99           |
|         *         |          任意版本（慎用）           | 如 1.0.0-alpha.1, 1.0.0-beta.2, 1.0.0  |

#### 多版本兼容

```json
{
  "peerDependencies": {
    "react": "^18.0.0 || ^17.0.0"  // 兼容 18.0.0 或 17.0.0 版本
  }
}
```

### 进阶配置

#### 可选依赖（Optional Peer Dependencies）

```json
{
  "peerDependencies": {
    "eslint": "^8.0.0"
  },
  "peerDependenciesMeta": {
    "eslint": {
      "optional": true  // 标记为可选，缺失时不报错
    }
  }
}
```

适用场景：当依赖仅在特定模式下需要时（如插件仅在启用 ESLint 时生效）



### 示例场景

#### React 组件库

假设你开发一个 `react-modal` 组件库，它需要宿主项目安装 `react`

```json
{
  "name": "react-modal",
  "peerDependencies": {
    "react": ">=16.8.0 <19.0.0",  // 兼容 React 16.8+ (Hooks 支持)
    "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0"
  }
}
```

✅ 正确情况：用户的项目已安装 `react@18.2.0` → 安装 `react-modal` 时无警告

❌ 错误情况：用户的项目已安装 `react@17.0.2` → 安装 `react-modal` 时会发出警告版本不兼容

#### Vue 3 插件

```json
{
  "name": "vue3-plugin",
  "peerDependencies": {
    "vue": "^3.2.0"  // 需要 Vue 3.2+ 的 Composition API
  },
  "peerDependenciesMeta": {
    "vue-router": {
      "optional": true  // 仅当用户安装 vue-router 时启用功能
    }
  }
}
```

### 与dependencies的区别

|         字段         |                   安装行为                    |          适用场景           |
|:------------------:|:-----------------------------------------:|:-----------------------:|
|  peerDependencies  | npm3~6版本 不自动安装，依赖宿主环境提供， npm 7+/pnpm自动安装  |   当前包需要宿主环境提供的依赖（如框架）   |
|    dependencies    |          自动安装到当前包的 node_modules           | 当前包自身运行必需的依赖（如 lodash）  |

### 关键注意事项

- 版本范围宽度: 尽量不要过度限制依赖版本，避免版本冲突, 范围过窄（如 ~18.2.0）：可能导致用户项目不兼容, 范围过宽（如 *）：可能隐藏兼容性问题, 推荐从最低支持版本开始（如 `^16.8.0`）。

- 区分现代包管理器行为:
  - npm v7+/pnpm：默认自动安装 peerDependencies
  - npm 3~6：默认不自动安装 peerDependencies
  - yarn v1：需要手动安装，仅做版本检查
  - 可通过参数控制

```shell
npm install --ignore-peer-deps  # 忽略检查
npm install --legacy-peer-deps  # 跳过自动安装（兼容旧模式）
```

### 调试技巧

检查是否生效:

```shell
# 安装时观察警告
npm install your-package

# 明确查看 peer 依赖问题
npm ls react --all  # 检查 react 依赖树
```

通过合理配置 `peerDependencies`，你的包可以优雅地声明运行时环境要求，避免版本地狱（dependency hell）的同时保持用户项目的轻量性

### 最佳实践

- 插件/库开发：如果你的包是另一个框架的插件（如 Babel 插件、Webpack Loader、React 组件库），应使用 peerDependencies声明对框架的依赖。

- 宽松版本范围：使用语义化版本（如 ^18.0.0）避免过度限制用户。

- npm v7+ 行为：npm 7+ 会默认自动安装 `peerDependencies`，但可通过 `--legacy-peer-deps` 禁用（常见于解决旧项目冲突）。

### 常见问题

- 为什么安装时提示 peer dependency missing

宿主项目未安装或版本不满足 peerDependencies要求

- 和 devDependencies冲突吗

不冲突。devDependencies是开发时用的工具（如 ESLint），而 peerDependencies是运行时需要的宿主环境依赖
