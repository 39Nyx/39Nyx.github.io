---
title: Java
order: 1
---

## jdk安装

### Windows

进入[Open JDK下载](https://jdk.java.net/)页面，选择合适的版本, 比如[jdk24](https://jdk.java.net/24/)，下载`zip`压缩包

进入`C:\Program Files`目录, 创建`jdk`文件夹，用于存放不同的jdk版本，将下载好的压缩包解压到`jdk`文件夹下,解压后到文件夹命名带上jdk的版本号, 比如`jdk-24.0.1`

按 `Win` + `R`，输入 `sysdm.cpl` 并回车, 切换到 `高级` 选项卡 → 点击 `环境变量`, 在 `系统变量` 区域点击 `新建`环境变量

变量名输入 `JAVA_HOME`, 变量值输入 `C:\Program Files\jdk\jdk-24.0.1`

在`系统变量`找到`Path`, 双击编辑 `Path` 变量, 点击 `新建`, 输入 `%JAVA_HOME%\bin`, 点击确定, 关闭所有窗口

打开新的命令行窗口，输入 `java -version` 验证是否安装成功

:::info{title=提示}
添加环境变量后，需要重新打开命令行窗口，才能生效。
:::

## 升级版本

### Windows

进入[Open JDK下载](https://jdk.java.net/)页面, 选择更高的版本，然后下载, 解压到`C:\Program Files\jdk`文件夹下, 可选择性是否覆盖原有版本，一般不建议覆盖

然后还是按 `Win` + `R`，输入 `sysdm.cpl` 并回车, 切换到 `高级` 选项卡 → 点击 `环境变量`，找到`JAVA_HOME`变量，双击编辑，将值改为新的版本号，点击确定，关闭所有窗口

打开新的命令行窗口，输入 `java -version` 验证版本是否升级成功


