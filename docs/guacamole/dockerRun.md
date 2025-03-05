---
title: Docker 运行
order: 1
---

## docker-compose

```yaml
version: '3'

services:
  mysql:
    image: mysql:latest
    container_name: mysql
    environment:
      MYSQL_ROOT_PASSWORD: guacamole
      MYSQL_DATABASE: guac
    volumes:
      - mysql_data:/var/lib/mysql
      - ./initdb:/docker-entrypoint-initdb.d  # 改用目录挂载自动初始化脚本
    ports:
      - "9306:3306"
    networks:
      - guacamole_net

  guacd:
    image: guacamole/guacd:latest
    container_name: guacd
    networks:
      - guacamole_net
    depends_on:
      - mysql

  guacamole:
    image: guacamole/guacamole:latest
    container_name: guacamole
    depends_on:
      - mysql
      - guacd
    environment:
      MYSQL_HOST: mysql
      MYSQL_DATABASE: guac
      MYSQL_USER: root
      MYSQL_PASSWORD: guacamole
      GUACD_HOSTNAME: guacd
      MYSQL_HOSTNAME: mysql
    ports:
      - "9090:8080"
    networks:
      - guacamole_net

volumes:
  mysql_data:

networks:
  guacamole_net:
```

生成初始化数据库文件

```shell
docker run --rm guacamole/guacamole /opt/guacamole/bin/initdb.sh --mysql > initdb.sql
```

启动所有服务

```shell

# 重新创建容器
docker-compose up -d

#  重启容器
docker-compose restart
```

## 手动执行命令

```shell
# 拉取镜像
$ docker pull guacamole/guacamole
$ docker pull  guacamole/guacd
$ docker pull mysql

# 运行mysql镜像，设置密码为guacamole
$ docker run  -d --name mysql -e MYSQL_ROOT_PASSWORD=guacamole mysql
1c4b9e48ba668529d2f4e3c3c4537cec4004469145060f2079af507f1c744816

# 初始化数据库文件
$ docker run --rm guacamole/guacamole /opt/guacamole/bin/initdb.sh --mysql > initdb.sql

# 将initdb.sql文件拷贝到mysql容器中
$ docker cp initdb.sql mysql:/
Successfully copied 25.1kB to mysql:/

# 连接到mysql容器
$ docker exec -it mysql bash
# 登录mysql
bash-5.1# mysql -uroot -p
# 密码为guacamole, 即在运行命令时参数MYSQL_ROOT_PASSWORD设置的值
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 10
Server version: 9.2.0 MySQL Community Server - GPL

Copyright (c) 2000, 2025, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

# 创建数据库
mysql> create database guac;
Query OK, 1 row affected (0.02 sec)

# 选择数据库
mysql> use guac;
Database changed

# 执行initdb.sql文件, 初始化数据库
mysql> source /initdb.sql
# 初始化成功后退出

# 运行guacd镜像
$ docker run --name guacd -d guacamole/guacd


# 运行guacamole镜像
$ docker run --name guacamole --link guacd:guacd --link mysql:mysql -e MYSQL_DATABASE=guac -e MYSQL_USER=root -e MYSQL_PASSWORD=guacamole -d -p 9090:8080 guacamole/guacamole
```

:::tip
三个镜像的运行顺序不能乱，先mysql、guacd、guacamole
:::

三个镜像运行成功后，访问地址为：http://127.0.0.1:9090/guacamole/, 默认账号密码为：guacadmin/guacadmin
