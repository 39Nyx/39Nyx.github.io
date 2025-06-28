---
title: Maven
order: 1
---

## maven安装

### Windows

进入[Maven官网下载页面](https://maven.apache.org/download.cgi), 下载`bin.zip`压缩包

进入`C:\Program Files`目录, 创建`maven`文件夹，用于存放不同的`maven`版本, 将下载的`bin.zip`压缩包解压到`maven`目录下, 解压后的文件夹名带上maven的版本号, 比如`apache-maven-3.9.10`

按 `Win` + `R`，输入 `sysdm.cpl` 并回车, 切换到 `高级` 选项卡 → 点击 `环境变量`, 在 `系统变量` 区域点击 `新建`环境变量

变量名输入 `MAVEN_HOME`, 变量值输入 `C:\Program Files\maven\apache-maven-3.6.1`

在`系统变量`找到`Path`, 双击编辑 `Path` 变量, 点击 `新建`, 输入 `%MAVEN_HOME%\bin`, 点击确定, 关闭所有窗口

打开新的命令行窗口, 输入 `mvn -v` 验证是否安装成功

:::info{title=提示}
添加环境变量后，需要重新打开命令行窗口，才能生效。
:::
