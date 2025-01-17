---
title: 安装 Node.js
order: 1
---

## macOS 安装 Node.js

### nvm 安装

```shell
curl -x http://your-proxy:port -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# 如
curl -x http://127.0.0.1:7890 -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# 输出内容
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 16563  100 16563    0     0  63051      0 --:--:-- --:--:-- --:--:-- 63217
=> nvm is already installed in /Users/hezhijian/.nvm, trying to update using git
=> => Compressing and cleaning up git repository

=> nvm source string already in /Users/hezhijian/.zshrc
=> bash_completion source string already in /Users/hezhijian/.zshrc
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

下载之后配置环境变量：

打开 `~/.zshrc` 文件，添加以下内容：

```shell
# nvm环境变量配置
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

保存并退出，然后运行 `source ~/.zshrc` 命令使环境变量生效。

### 安装 Node.js

```shell
# 安装22.x.x版本的Node.js
nvm install 22

# 查看远程版本列表
nvm ls-remote
```

如果在执行`nvm ls-remote`命令时出现如下结果:

```shell
$ nvm ls-remote
    iojs-v1.0.0
    iojs-v1.0.1
    iojs-v1.0.2
    iojs-v1.0.3
    iojs-v1.0.4
    iojs-v1.1.0
    iojs-v1.2.0
    iojs-v1.3.0
    iojs-v1.4.1
    iojs-v1.4.2
    iojs-v1.4.3
    iojs-v1.5.0
```

那么打开`~/ .zshrc`文件，添加以下内容：

```shell
export NVM_NODEJS_ORG_MIRROR=https://nodejs.org/dist
```

保存并退出，然后运行 `source ~/.zshrc` 命令使环境变量生效。

在终端执行`echo $NVM_NODEJS_ORG_MIRROR`命令，得到输出结果为`https://nodejs.org/dist` 即可
