---
title: Requests
order: 3
---

## 安装

```shell
pip install requests
```

## 基本用法

### GET 请求


```python
import requests

try:
    # 发送get请求
    response = requests.get('https://www.baidu.com')
    response.raise_for_status() # 如果响应状态码不是200, 则抛出异常
    response.encoding = response.apparent_encoding # 设置编码
    html = response.text # 获取响应内容
    print(html)
    # 获取状态码
    status_code = response.status_code
    print(status_code)

except requests.exceptions.RequestException as e:
    print(f"请求失败, {e}")
    print(e)
```
