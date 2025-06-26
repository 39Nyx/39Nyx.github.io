---
title: 快速开始
order: 1
---

## 安装

### windows

- 下载安装包: [Git for Windows](https://git-scm.com/download/win)
- 选择默认选项安装, 一直点击下一步、下一步直到安装完成
- 打开命令行工具，输入 `git --version` 验证是否安装成功


## 配置

- 输入 `git config --global user.name "your name"` 

- 输入 `git config --global user.email "your email"` 设置邮箱

```shell
# 设置全局用户名
git config --global user.name "your name"

# 设置全局邮箱
git config --global user.email "your email"

# 查看全局配置
git config --global --list

# 设置当前仓库用户名
git config user.name "your name"

# 设置当前仓库邮箱
git config user.email "your email"

# 查看当前仓库配置
git config --list
```

## 代理设置

```shell
# 克隆仓库时候一次性代理
git clone -c http.proxy="http://127.0.0.1:7890" https://github.com/<USER_NAME>/<PROJECT_NAME>.git

# 设置全局代理
git config --global http.proxy "http://127.0.0.1:7890"

# 为当前仓库设置代理
git config http.proxy "http://127.0.0.1:7890"
```

## clone项目

```shell
git clone https://github.com/<USER_NAME>/<PROJECT_NAME>.git

# 克隆指定分支
git clone -b <BRANCH_NAME> https://github.com/<USER_NAME>/<PROJECT_NAME>.git

# 克隆后更改目录
git clone https://github.com/<USER_NAME>/<PROJECT_NAME>.git <NEW_PROJECT_NAME>
```
