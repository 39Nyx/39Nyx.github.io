---
title: 命令
order: 2
---

## 镜像管理

### 拉取镜像

```shell
docker pull <镜像名>:<标签>
# 例如拉取ubuntu最新镜像
docker pull ubuntu:latest

docker pull <镜像名>
# 不带标签名, 默认拉取最新镜像
docker pull ubuntu
```

### 构建镜像

```shell
# 根据 Dockerfile 构建
docker build -t <镜像名> .
```

### 查看本地镜像

```shell
docker images
```

## 删除镜像

```shell
docker rmi <镜像名>:<标签>
# 例如 docker rmi nginx:latest

# 先执行 docker images 查看镜像ID
docker rmi <镜像ID>
```

### 其他镜像命令

```shell
docker tag <原镜像> <新标签>  # 重命名镜像
docker inspect <镜像ID>      # 查看镜像详细信息
docker search <关键词>      # 搜索 Docker Hub 镜像
```

## 容器管理

### 运行容器

```shell
docker run [选项] <镜像名>    # 常用选项：
-d                      # 后台运行
-it                     # 交互模式（-i 输入 -t 终端）
-p <宿主端口>:<容器端口>  # 映射端口
-v <宿主目录>:<容器目录>  # 挂载卷
--name <容器名>          # 指定容器名
# 示例：后台运行 Nginx 并映射端口, 可以通过127.0.0.1:8088 访问容器内的 Nginx
docker run -d -p 8088:80 --name my-nginx nginx
```

### 查看容器状态

```shell
docker ps                # 运行中的容器
docker ps -a             # 所有容器（包括停止的）
```

### 控制容器

```shell
docker start <容器ID>      # 启动容器
docker stop <容器ID>       # 停止容器
docker restart <容器ID>    # 重启容器
docker kill <容器ID>       # 强制终止容器
```

### 进入容器

```shell
docker exec -it <容器ID> /bin/bash  # 交互式进入
docker exec -it <容器name> bash  # 交互式进入
```

### 删除容器

```shell
docker rm <容器ID>         # 删除已停止的容器
docker rm -f <容器ID>       # 强制删除（无论状态）
docker container prune       # 清空所有停止容器
```

### 容器日志

```shell
docker logs <容器ID>        # 查看日志
docker logs -f <容器ID>     # 实时跟踪日志
```

## 网络管理

### 查看网络

```shell
docker network ls          # 列表所有网络
docker network inspect <网络名>  # 查看详细信息
```

### 创建/删除网络

```shell
docker network create <网络名>  # 创建自定义网络
docker network rm <网络名>       # 删除网络
```

### 容器连接网络

```shell
docker network connect <网络名> <容器ID>  # 将容器连接到网络
docker network disconnect <网络名> <容器ID>  # 断开连接
```

## 卷管理

### 查看卷

```shell
docker volume ls            # 列表所有卷
docker volume inspect <卷名>  # 查看详细信息
```

### 创建/删除卷

```shell
docker volume create <卷名>    # 创建卷
docker volume rm <卷名>       # 删除卷
```


## 其他常用命令

### 系统信息

```shell
docker info               # 查看 Docker 系统信息
docker version            # 查看 Docker 版本
```

### 资源监控

```shell
docker stats             # 实时查看容器资源占用
docker system df          # 查看磁盘使用情况
```

### 安全扫描

```shell
docker scan <镜像名>       # 检查镜像漏洞（需安装 Docker Scan）
```

### 登录/推送镜像

```shell
docker login              # 登录 Docker Hub
docker logout             # 登出
docker push <镜像名>       # 推送镜像到仓库
```
