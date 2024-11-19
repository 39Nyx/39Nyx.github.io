---
title: 环境搭建
group:
  title: 手册
  order: 2
order: 1
---


## 搭建浏览器开发环境

在使用 TypeScript 进行浏览器开发时，这里使用`vite`工具进行环境搭建。

```shell
$ pnpm create vite

# 输出如下：
.../19344ed6c32-507e                     |   +1 +
.../19344ed6c32-507e                     | Progress: resolved 1, reused 0, downloaded 1, added 1, done

# 选择项
✔ Project name: … ts-study
✔ Select a framework: › Vanilla
✔ Select a variant: › TypeScript

# 输出如下
Scaffolding project in /Users/<username>/nodeProject/ts-study...

Done. Now run:

  cd ts-study
  pnpm install
  pnpm run dev

```

输入项目名称，选择`Vanilla`框架，选择`TypeScript`语言。创建好之后进入项目，执行`pnpm install`安装依赖，然后执行`pnpm run dev`启动项目即可。

进入项目可以看到`package.json`文件，只有`vite`依赖和`typescript`依赖，没有其他的依赖。

```json
{
  "name": "ts-study",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "typescript": "~5.6.2",
    "vite": "^5.4.10"
  }
}
```

里面有三个脚本命令，分别是：

- `dev`：启动开发环境，会启动一个服务，监听文件变化，自动编译代码。
- `build`：编译代码，输出到`dist`目录。
- `preview`：启动一个本地服务器，用于预览编译后的代码。
