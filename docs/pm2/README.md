---
title: PM2
order: 1
---
## 基础应用管理


| 命令                                  | 说明                                        |
|-------------------------------------|-------------------------------------------|
| pm2 start <app_name\|app_id>        | 启动一个应用（如果已配置）                             |
| pm2 start <script>                  | 启动一个脚本（如 pm2 start app.js）                |
| pm2 start npm -- start              | 启动一个 npm 脚本（如启动 npm start）                |
| pm2 start npm -- run <script_name>  | 启动指定的 npm 脚本（如 pm2 start npm -- run dev）  |
| pm2 stop <app_name\|app_id\|all>    | 停止一个或所有应用                                 |
| pm2 restart <app_name\|app_id\|all> | 重启一个或所有应用（服务会中断）                          |
| pm2 reload <app_name\|app_id\|all>  | 重载一个或所有应用（零秒停机，平滑重启）                      |
| pm2 delete <app_name\|app_id\|all>  | 从 PM2 列表中删除一个或所有应用                        |
| pm2 kill                            | 强制终止整个 PM2 守护进程（所有应用都会停止）                 |

:::info{title=提示}
`restart`和 `reload`的区别：`restart`会先停止再启动，会有短暂的服务中断。`reload`会逐个启动新进程，然后优雅关闭旧进程，适用于生产环境无缝更新。
:::

## 查看信息与监控

| 命令                           | 说明                                                         |
|------------------------------|----------|
| pm2 list或 pm2 ls或 pm2 status | 显示所有应用的状态列表 |
| pm2 info <app_name\|app_id>  | 显示某个应用的详细信息 |
| pm2 logs <app_name\|app_id>  |  显示某个应用的实时日志 |
| pm2 logs --lines <n> |显示日志并指定显示的历史行数（如 100） |
| pm2 flush | 清空所有日志文件（归档旧日志） |
| pm2 monit | 启动一个强大的实时终端仪表盘，查看进程详情 |

## 运维与扩展

| 命令                         | 说明                                                         |
|----------------------------|----------|
| pm2 startup                | 生成启动脚本，让 PM2 在系统重启后自动运行（需要 sudo） |
| pm2 unstartup              | 移除上面生成的启动脚本 |
| pm2 scale <app_name> <num> | 动态扩展集群应用的实例数量（如 pm2 scale my-app 4） |
| pm2 reset <app_name\|all> | 重置所有计数器和元数据 |

## 常用操作流程示例

动并守护一个应用

```shell
pm2 start app.js --name "my-api"
```

零停机部署/更新（最常用）

```shell
# 1. 更新代码后，简单地重载应用
pm2 reload my-api

# 2. 或者，如果你使用了配置文件
pm2 reload ecosystem.config.js --env production
```

查看日志

```shell
# 查看所有应用的实时日志
pm2 logs

# 只查看 ‘my-api’ 的日志，并显示最后 100 行
pm2 logs my-api --lines 100

# 清空旧的日志文件
pm2 flush
```

## 总结

掌握这些命令，基本上就能覆盖 90% 的日常开发和生产运维场景。核心命令记住 `start`, `stop`, `restart`, `reload`, `logs`, `list`和 `save`就足够了。对于更复杂的应用，一定要学会使用 `ecosystem.config.js`配置文件。
