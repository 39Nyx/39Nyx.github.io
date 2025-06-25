---
title: npm
order: 1
---

## nvm安装

### windows

在`windows`系统中，先去[nvm-windows](https://github.com/coreybutler/nvm-windows/releases)的github仓库下载`exe`的安装包, 然后直接安装即可

:::info
安装nvm之前, 最好不要安装`node`
:::


#### Q & A

- 安装法执行`nvm`命令报错

由于Power Shell的执行策略限制了脚本的执行, 所以需要修改一下执行策略, 有如下四种策略，一般使用`RemoteSigned`即可

- Restricted：默认策略，禁止运行任何脚本，除非明确允许。

- AllSigned：只允许运行经由数字签名并由受信任的发布者签名的脚本。

- RemoteSigned：允许运行未经签名的脚本，但是必须由受信任的发布者在本地计算机上签名。

- Unrestricted：允许运行所有脚本


以管理员权限打开命令行工具 `Windows PowerShell`，输入以下命令

```shell
# 查看执行策略
Get-ExecutionPolicy

# 设置执行策略为RemoteSigned , 执行指令后，需要再次确认指令修改，按提示输入 Y
Set-ExecutionPolicy RemoteSigned
```

:::info
更改策略后最好重新启动命终端，不然有可能还是旧的策略
:::


### 安装node

```shell
nvm install 22.17.0
```

### 切换node版本

```shell
nvm use 22.17.0
```

### 查看node版本列表

```shell
nvm list
```
