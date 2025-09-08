---
title: nvm
order: 2
---

## 设置镜像

```shell
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror https://npmmirror.com/mirrors/npm/
```

## 设置代理

```shell
nvm proxy http://127.0.0.1:7897
```

## 配置文件

找到`nvm`的安装目录，一般在`C:\Users\<你的用户名>\AppData\Roaming\nvm`， 进入`C:\Users\<你的用户名>\AppData\Local\nvm`目录, 该目录下有`settings.txt`文件, 文件里面包含了nvm的所有配置, 例如配置的`node_mirror`, `npm_mirror`, `proxy`, 当然也可以手动添加, 例如添加源

```shell
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

## 手动安装node.js

在安装比较旧的node.js版本的时候, 可能会出现以下问题

```shell
nvm install 14
# 输出内容
Downloading node.js version 14.21.3 (64-bit)...
Complete
Downloading npm...
Creating C:\Users\ADMINI~1\AppData\Local\Temp\nvm-install-2488179838\temp

Downloading npm version 6.14.18... Download failed. Rolling Back.
C:\Users\ADMINI~1\AppData\Local\Temp\nvm-install-2488179838\temp\npm-v6.14.18.zip
Rollback failed. remove C:\Users\ADMINI~1\AppData\Local\Temp\nvm-install-2488179838\temp\npm-v6.14.18.zip: The process cannot access the file because it is being used by another process.
error installing 14.21.3: Could not download npm for node v14.21.3.
Please visit https://registry.npmjs.org/npm/14.21.3 to download npm.
It should be extracted to C:\Users\Administrator\AppData\Local\nvm\v14.21.3
```

进入[nodejs官网下载页面](https://nodejs.org/dist/)

- 找到需要的版本, 例如 `Windows 64` 下载 `node-v14.21.3-win-x64.zip`

- 下载文件后将文件解压到 `C:\Users\Administrator\AppData\Local\nvm`目录, 解压后文件命名为`v14.21.3`

- 执行`nvm list`查看版本号列表, 
