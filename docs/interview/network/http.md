---
title: HTTP
group:
    title: 网络协议
    order: 2
---


## HTTP版本的发展过程

`HTTP/0.9`是第一个版本的HTTP协议，已过时， 组成非常简单，只允许客户端发送`GET`这一种请求，且不支持请求头， `HTTP/0.9`是典型的无状态性， 每个事务独立处理，事务结束就释放这个连接

`HTTP/1.0`是HTTP的第二个版本,主要添加了以下内容:

- 添加了POST请求方式
- 增加了Http状态码和请求头
- 新增Cookie

`HTTP/1.1`, 添加了以下内容:

- 添加了Keep-alive连接
- 新增pipeline管道机制
- 增加了PUT、DELETE、OPTIONS、PATCH等请求方式

`HTTP/2.0`添加了以下内容

- 头部支持二进制协议，支持头部压缩
- 新增多路复用

`HTTP/3.0`

http协议等历史性革命性大改版，将底层TCP协议改为UDP协议，彻底解决队头阻塞问题

缺点: 兼容性还不行, 不能大规模使用


## HTTP1.1的特点

HTTP/1.1 相对于早期的 HTTP/1.0 进行了显著改进，成为构建现代 Web 的核心协议，并长期占据主导地位。其主要特点包括

### 持久连接 (Persistent Connections)

- 核心改进: 允许在单个 TCP 连接上发送和接收多个 HTTP 请求/响应。无需像 HTTP/1.0 那样为每个请求都建立一个新的连接（`Connection: keep-alive` 在 HTTP/1.0 中是非标准化的扩展）
- 默认开启: 在 HTTP/1.1 中持久连接是默认开启的（除非显式指定 `Connection: close`）
- 优点： 极大减少了因频繁建立/断开 TCP 连接带来的 延迟 和 资源开销（CPU、内存、网络）。提高了页面加载速度和服务器性能

### 管道化 (Pipelining)

- 概念： 客户端可以在等待上一个请求响应的同时，通过同一个连接发送多个请求。请求按顺序发出，服务器必须按相同的顺序返回响应
- 意图： 进一步减少延迟，避免“队头阻塞”中的“空闲时间”（即等待响应时连接空闲）。
- 局限性： 理论上很好，但实践中存在严重问题： 
  - 队头阻塞：​​ 如果一个请求的处理速度很慢，它会阻塞其后面所有请求的响应，即使后面的请求已经处理完毕。 
  - 中间代理服务器或旧服务器的支持不完善。
  - 有些请求不是幂等的（如 POST）可能不适合管道化。
  - 由于这些缺点，浏览器默认通常禁用管道化。
  
### 必需的主机头域 (Host Header Requirement)

- 强制要求： HTTP/1.1 请求必须包含 Host 头部字段
- 目的： 支持虚拟主机托管。同一台物理服务器/同一个 IP 地址可以托管多个网站/域名。服务器根据 Host 头的值来决定将请求路由到哪个虚拟主机/网站。这是支持现代 Web 的基础之一

### 分块传输编码 (Chunked Transfer Encoding)

- 概念： 允许服务器在预先不知道响应体总长度（如动态生成的内容）的情况下开始发送响应
- 工作原理： 将响应体分割成一系列“块”（chunk）。每个块有自己的大小标记（16 进制），后面跟着实际的块数据，最后以一个大小为 0 的块作为结束标记。
- 优点：
  - 避免服务器需要缓存整个响应后才开始发送（提高效率）。
  - 客户端可以在接收完整响应之前开始处理部分内容。
  - 允许服务器在传输过程中附加尾部（trailers）头域（在数据块之后发送）。
- 使用： 服务器通过 `Transfer-Encoding: chunked` 头部通知客户端使用此机制。

### 字节范围请求 (Byte Ranges / Partial Content)

- 功能： 客户端（如视频播放器、断点续传下载工具）可以只请求资源的一部分
- 请求：使用 `Range` 头部（如 `Range: bytes=0-499`）
- 响应： 服务器返回状态码 `206 Partial Content` 和 `Content-Range` 头部指明返回的是哪个字节范围
- 优点： 支持断点续传、并行下载（通过多范围请求）、仅获取文件元数据（如用 HEAD）而不下载全部内容、流媒体等场景，节约带宽并提高性能

### 增强的缓存机制 (Enhanced Caching)

- HTTP/1.1 引入了更精细、更强力的缓存控制机制
  - 更多缓存相关头部： 提供了 ETag（实体标签）、Cache-Control（取代部分 Expires 功能，提供更灵活的指令如 max-age, no-cache, no-store, must-revalidate, public, private）、Vary 等
  - 更精确的验证： If-Match, If-None-Match（基于 ETag 的验证），If-Modified-Since, If-Unmodified-Since（基于时间的验证）
- 优点： 提供了更丰富、更可靠的方式让客户端和服务器（以及中间缓存如 CDN 和代理）管理缓存，显著减少重复数据传输和服务器负载

### 更丰富的状态码 (Rich Status Codes)

- 引入了更多状态码以提供更精确的错误和状态信息，例如
  - 100 Continue（继续请求体）
  - 206 Partial Content（部分内容）
  - 301 Moved Permanently / 302 Found（重定向）及 307 Temporary Redirect / 308 Permanent Redirect（更明确的重定向）
  - 400 Bad Request（坏请求）、401 Unauthorized（未授权）、403 Forbidden（禁止）、404 Not Found（未找到）、405 Method Not Allowed（方法不允许）等
  - 408 Request Timeout（请求超时）、409 Conflict（冲突）、410 Gone（资源已移除）、429 Too Many Requests（请求过多）
  - 500 Internal Server Error（服务器内部错误）、501 Not Implemented（未实现）、502 Bad Gateway（网关错误）、503 Service Unavailable（服务不可用）、504 Gateway Timeout（网关超时）

### 改进的错误处理 (Improved Error Handling)

- 除了状态码更丰富外，还要求在响应中（特别是错误响应如 4xx, 5xx）包含一个人类可读的错误描述实体主体，便于开发者调试和理解问题。

### 额外的方法 (Additional Methods)

- 新增了一些 HTTP 方法
  - OPTIONS: 用于探测目标资源支持的通信选项
  - PUT: 用于创建或完全替换目标资源
  - DELETE: 删除指定的资源
  - TRACE: 沿着到目标资源的路径执行一个消息环回测试（主要用于诊断）
  - CONNECT: 用于建立到目标资源的隧道（通常用于 HTTPS 代理）
- PATCH（用于对资源进行部分修改）虽然在 HTTP/1.1 时代被 RFC 5789 定义，但常与 HTTP/1.1 相关联使用

### 内容协商 (Content Negotiation)

- 客户端通过请求头（如 Accept, Accept-Language, Accept-Encoding, Accept-Charset）声明其偏好
- 服务器根据这些头信息和可用资源，从多个可能的表示形式中选择最合适的返回（响应中包含 Content-Language, Content-Encoding, Content-Type 等）。更灵活的协商机制由 Vary 头支持

总结：

HTTP/1.1 的核心是通过持久连接、强制 Host 头、分块传输、字节范围请求和增强缓存等特性，​显著提升了性能和效率，解决了 HTTP/1.0 的主要瓶颈。它提供了更丰富、更精确的语义​（状态码、方法、头部），并支持了虚拟主机等现代 Web 基础设施。尽管它在队头阻塞问题上存在固有缺陷（尤其是管道化的局限性），但在 HTTP/2 普及之前，它是十多年间 Web 通信的绝对主力

## HTTP2.0的特点


## HTTP3.0的特点
