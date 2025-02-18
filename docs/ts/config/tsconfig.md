---
title: tsconfig.json
order: 1
group:
  title: 配置
  order: 4
---

## tsconfig.json

TypeScript 的配置文件，用于控制编译器的行为。

常用的配置项如下

```json
{
  "compilerOptions": {
    "outDir": "dist", // 输出的目录
    "sourceMap": true, // 采用sourcemap
    "target": "es2016", // 目标语法
    "module": "esnext",
    "moduleResolution": "node", // 采用node的模块解析策略
    "strict": false, // 是否开启严格模式
    "resolveJsonModule": true, // 允许导入json文件
    "esModuleInterop": true, // 允许使用es6模块导入CommonJS模块
    "jsx": "preserve", // jsx 不转义
    "lib": ["esnext", "dom"], // 支持的类库 esnext 和 dom
    "baseUrl": "./", // 根目录
    "paths": {
      // 路径映射
      "@vue/*": ["./packages/*/src"]
    }
  }
}

```
