---
title: Maven
order: 1
---

## maven安装

`Maven` 需要 `Java` 环境，首先检查是否已安装 `JDK`， 如果没有安装，请先安装 `JDK`

```shell
java -version
```

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

### mac

进入[Maven官网下载页面](https://maven.apache.org/download.cgi), 下载`bin.tar.gz`压缩包

将安装包解压到指定目录下, 比如`~/maven`

```shell
tar -zxvf apache-maven-3.8.9-bin.tar.gz -C ~/maven
```

配置环境变量, 编辑`~/.zshrc`文件

```shell
# vim ~/.zshrc, 按i进入编辑模式，添加以下内容
export MAVEN_HOME=~/maven/apache-maven-3.8.9
export PATH=$PATH:$MAVEN_HOME/bin
```

保存并退出, 执行以下命令使环境变量生效

```shell
source ~/.zshrc
```

验证是否安装成功

```shell
mvn -v
```

:::info{title=提示}
添加环境变量后，需要重新打开命令行窗口，才能生效。
:::

## 配置镜像

在安装好的`apache-maven-3.8.9`目录下, 找到`conf`目录, 打开`settings.xml`文件, 找到`mirrors`节点, 并添加以下内容

```xml
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

### mirror

**作用**：定义一个 Maven 仓库镜像，用于替代指定的原始仓库

**说明**：所有匹配 <mirrorOf> 的仓库请求都会被重定向到这个镜像。

### id

**作用**：镜像的唯一标识符。

**说明**：可以是任意名称（如 aliyunmaven、nexus 等）, 用于在 Maven 配置中区分不同的镜像

### mirrorOf

**作用**：指定哪些仓库会被这个镜像替代

**说明**：可以使用通配符（*）来匹配所有仓库,包括(包括 Maven 中央仓库 central), 如果需要只镜像特定仓库，可以填写仓库的 id（如 <mirrorOf>central</mirrorOf>）, 若需排除某些仓库，可使用 !（如 <mirrorOf>*,!private-repo</mirrorOf>）

### name

**作用**：镜像的名称。

**说明**：仅用于人工阅读，无实际功能影响, 可以随便自定义填写

### url

 **作用**：镜像仓库的实际地址

 **说明**：这里是阿里云提供的公共 Maven 仓库地址, 所有匹配 <mirrorOf> 的请求都会转发到此 URL, 可以是 HTTP/HTTPS 协议的 URL 地址，也可以是本地文件系统的路径（如 file:///path/to/repo）

:::info{title=提示}
在maven3.8.1开始, url地址强制使用`https`协议，不在支持`http`协议
:::

## 历史版本

一些项目有版本要求，这个时候需要下载旧的`maven`版本, 那么可以进入[https://archive.apache.org/dist/maven/maven-3/](https://archive.apache.org/dist/maven/maven-3/)下载旧版本的`bin.zip`或者`bin.tar.gz`压缩包
