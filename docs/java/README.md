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

### mac

我这里安装的`open jdk`是`zuul jdk`, 进入[Azul Zulu JDK下载](https://www.azul.com/downloads/?package=jdk#zulu)页面，下载`dmg`安装包, 然后双击根据提示安装即可，最后在终端输入`java -version`验证是否安装成功

```shell
java -version

# 输出内容
openjdk version "21.0.7" 2025-04-15 LTS
OpenJDK Runtime Environment Zulu21.42+19-CA (build 21.0.7+6-LTS)
OpenJDK 64-Bit Server VM Zulu21.42+19-CA (build 21.0.7+6-LTS, mixed mode, sharing)
```

虽然已经可以直接使用`java`命令了，但是环境变量还是建议配置一下, 因为在一些场景需要显式配置 `JAVA_HOME`

- 开发工具依赖：如 Maven、Gradle、IntelliJ IDEA 等需要明确知道 JDK 的安装路径
- 脚本兼容性：某些脚本或程序直接引用 JAVA_HOME 变量

配置`JAVA_HOME`环境变量，在`.zshrc`文件中添加以下内容

```shell
# 打开终端，输入以下命令
vim ~/.zshrc

# 添加以下内容
export JAVA_HOME=$(/usr/libexec/java_home -v 21)  # 指定JDK版本, 这里省略了后续小版本, 如果有多个大版本，需要添加后面的小版本 
export PATH=$JAVA_HOME/bin:$PATH
```

:::info{title=提示}
macOS 默认集成了 Java 相关工具, 提供了 /usr/libexec/java_home 工具，它会自动检测已安装的 JDK 并返回合适的路径, 即使没有 JAVA_HOME，系统或脚本可以通过调用此工具临时获取 Java 路径, 例如，当运行 java 命令时，系统可能隐式调用

```shell
/usr/libexec/java_home --exec java -version
```
:::

保存并退出，输入`source ~/.zshrc`使环境变量生效

### java_home

`java_home`是`macOS`的内置工具， 以下是`java_home`的用法

- 查看当前默认的`JDK`路径

```shell
/usr/libexec/java_home

# 输出内容
/Library/Java/JavaVirtualMachines/zulu-21.jdk/Contents/Home
```

- 查看所有已安装的 `JDK`

```shell
/usr/libexec/java_home -V

# 输出内容
Matching Java Virtual Machines (4):
    21.0.7 (arm64) "Azul Systems, Inc." - "Zulu 21.42.19" /Library/Java/JavaVirtualMachines/zulu-21.jdk/Contents/Home
    17.0.15 (arm64) "Azul Systems, Inc." - "Zulu 17.58.21" /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
    11.0.10 (arm64) "Azul Systems, Inc." - "Zulu 11.45.27" /Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home
```

- 指定版本查询（如 JDK 17）

```shell
/usr/libexec/java_home -v 17

# 输出内容
/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
```

`/usr/libexec/java_home -v`的匹配规则如下

- 精确匹配：-v 17.0.15 → 只匹配 17.0.15
- 主版本匹配：-v 17 → 匹配所有 17.x.x 版本，返回最新的
- 无匹配时报错：如果没有符合条件的 JDK，会报错

例如在执行`/usr/libexec/java_home -v 17`的时候， 它会扫描 `/Library/Java/JavaVirtualMachines/` 目录，查找版本号 开头为 `17` 的 JDK（如 17.0.x）, 如果找到多个匹配的 JDK（例如 17.0.1 和 17.0.2），默认返回 版本号最高的一个

- 检查特定版本是否存在

```shell
if /usr/libexec/java_home -v 17 &>/dev/null; then
    echo "JDK 17 已安装"
else
    echo "JDK 17 未安装"
fi
```

## 切换版本

### Windows

进入[Open JDK下载](https://jdk.java.net/)页面, 选择更高的版本，然后下载, 解压到`C:\Program Files\jdk`文件夹下, 可选择性是否覆盖原有版本，一般不建议覆盖

然后还是按 `Win` + `R`，输入 `sysdm.cpl` 并回车, 切换到 `高级` 选项卡 → 点击 `环境变量`，找到`JAVA_HOME`变量，双击编辑，将值改为新的版本号，点击确定，关闭所有窗口

打开新的命令行窗口，输入 `java -version` 验证版本是否升级成功

### mac

在[Azul Zulu JDK下载](https://www.azul.com/downloads/?package=jdk#zulu)页面下载低版本的安装包， 然后双击根据提示安装即可，然后更改`.zshrc`文件中的`JAVA_HOME`变量值即可

```shell
# 添加以下内容
export JAVA_HOME=$(/usr/libexec/java_home -v 17)  # 指定JDK版本, 这里省略了后续小版本, 如果有多个大版本，需要添加后面的小版本 
export PATH=$JAVA_HOME/bin:$PATH
```


### IntelliJ IDEA切换版本

打开 `IntelliJ IDEA` → `Preferences` → `Build`, `Execution`, `Deployment` → `Java Compiler`

在 `Project SDK` 中选择已安装的 `JDK` 版本

:::info{title=提示}
这种方式仅限 IDE
:::
