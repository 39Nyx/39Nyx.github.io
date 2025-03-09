---
title: 配置文件
order: 2
---

`SpringBoot`支持`application.yml`和`application.properties`文件配置, 文件都是放在`<project-name>/src/resources`目录下


## yml配置

yml通过换行分隔, 缩进表示层级关系， 例如更改端口配置如下

```yaml
server:
  port: 8081
```

## properties配置

properties通过`=`分隔, `.`表示层级关系, 例如更改端口配置如下

```html
server.port=8081
```

