---
title: nvm
order: 2
---

## windows配置源

### 环境变量

- 打开系统环境变量设置: 
  - 按 Win + R，输入 sysdm.cpl 并回车
  - 切换到 `高级` 选项卡 → 点击 `环境变量`
- 新建系统变量
  - 在 `系统变量` 区域点击 `新建`
  - 变量名：NVM_NODEJS_ORG_MIRROR
  - 变量值：https://npm.taobao.org/mirrors/node/
  - 点击确定
  - 关闭所有窗口
- 重新打开终端
- 运行 nvm install <版本号>，速度应该会显著提升

:::info{title=提示}
添加环境变量后，需要关闭所有弹窗并重新打开终端，才会生效。不要使用旧的终端，否则环境变量不会生效。
:::

### 配置文件

- 找到`nvm`的安装目录，一般在`C:\Users\<用户名>\AppData\Roaming\nvm`
- 修改 `settings.txt` 文件, 添加以下内容：

```shell
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

保存后重新运行 nvm install <版本号>，速度应该会显著提升。
