---
title: myBatis
order: 1
group:
  title: 集成
  order: 5
---


## 配置mybatis依赖

在`pom.xml`文件中，添加`mybatis`的启动依赖

```xml

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <dependencies>
    <!--mybatis的起步依赖-->
    <dependency>
      <groupId>org.mybatis.spring.boot</groupId>
      <artifactId>mybatis-spring-boot-starter</artifactId>
      <version>3.0.5</version>
    </dependency>
  </dependencies>
</project>
```

## 配置数据源

```properties
spring.datasource.url=jdbc:mysql://127.0.0.1:1306/库名
spring.datasource.username=数据库用户名
spring.datasource.password=数据库密码
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```
