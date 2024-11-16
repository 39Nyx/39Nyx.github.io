---
title: 代理
order: 3
---

## 代理

### clone代码

在克隆`github`上的代码的时候，有时候非常的慢，这个时候可以使用代理进行克隆代码

```shell
# 一次性代理
git clone -c http.proxy="http://127.0.0.1:1087" https://github.com/<USER_NAME>/<PROJECT_NAME>.git
```

其中`1087`是使用代理工具的端口号, 例如`clash`可以在 帮助 --> 端口 看到，将 `1087`替换为对应的端口即可

此命令只是在此次clone中会只用，并不会设置为全局代理

### push代码

有时候在`push`代码到`github`的时候，会出现时间超时, 那么可以通过下面命令设置代理(在项目跟目录下执行，不是设置全局的代理)

```shell
git config http.proxy http://127.0.0.1:1087
```

将`1087`替换为对应的端口即可, 可以使用`git config http.proxy`查看是否设置成功

> 设置代理后必须打开代理工具才能提交上去，否则无法push代码上去

取消代理

```shell
git config --unset http.proxy
```

