---
title: 镜像加速
order: 3
---

## windows

### 通过 Docker Desktop 图形界面配置

- 右键任务栏 Docker 图标 → 选择 Settings
- 左侧导航到 Docker Engine
- 在右侧 JSON 配置中添加镜像地址（示例使用阿里云加速器）：

```json
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": ["https://<你的阿里云ID>.mirror.aliyuncs.com"]
}
```

### 手动编辑配置文件

- 右键任务栏 Docker 图标 → 选择 Settings → 左侧导航到 Resources → 打开 FILE SHARING
- 记下显示的共享路径（如 C:\Users\你的用户名）
- 在共享路径下创建 C:\Users\你的用户名\.docker\daemon.json 文件
- 写入镜像配置：

```json
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": ["https://<你的阿里云ID>.mirror.aliyuncs.com"]
}
```

## 阿里云ID获取

文章地址： https://help.aliyun.com/zh/acr/user-guide/accelerate-the-pulls-of-docker-official-images


- 访问 [阿里云容器镜像服务控制台](https://cr.console.aliyun.com/?spm=a2c4g.11186623.0.0.27881d82QlegKo)
- 登录后进入 镜像工具 → 镜像加速器
- 复制专属加速器地址（需替换 <你的阿里云ID> 部分）
