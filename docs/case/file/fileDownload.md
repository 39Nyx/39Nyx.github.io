---
title: 文件下载
order: 1
group:
  title: 文件
  order: 1
---

以下是使用 `axios` 发送请求并生成文件下载的完整代码示例，包含详细注释和常见场景处理：

```javascript
import axios from 'axios';

/**
 * 通过 axios 下载文件并触发浏览器保存
 * @param {string} url - 请求地址
 * @param {string} filename - 可选，手动指定文件名（优先级高于响应头）
 * @param {Object} config - 可选，axios 自定义配置（如请求头、参数等）
 */
async function downloadFile(url, filename = '', config = {}) {
  try {
    // 发送请求（强制指定 responseType 为 'blob'）
    const response = await axios({
      method: 'get', // 默认 GET，可在此覆盖为 POST 等
      url,
      responseType: 'blob',
      ...config // 允许用户传入自定义配置（如 headers、params 等）
    });

    // 获取文件名逻辑（优先级：手动指定 > 响应头 Content-Disposition > 默认名）
    let finalFilename = filename;
    if (!finalFilename) {
      // 从响应头解析文件名（需注意 CORS 限制）
      const contentDisposition = response.headers['content-disposition'];
      if (contentDisposition) {
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(contentDisposition);
        if (matches && matches[1]) {
          finalFilename = matches[1].replace(/['"]/g, '');
        }
      }
    }
    // 若仍未定义文件名，使用默认名（如未知文件）
    if (!finalFilename) finalFilename = 'download';

    // 创建 Blob 对象（可自动识别 MIME 类型，也可手动指定）
    const blob = new Blob([response.data], {
      type: response.headers['content-type'] || 'application/octet-stream'
    });

    // 创建临时链接并触发下载
    const link = document.createElement('a');
    const objectUrl = window.URL.createObjectURL(blob);
    
    link.href = objectUrl;
    link.download = finalFilename;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    
    // 清理资源
    document.body.removeChild(link);
    window.URL.revokeObjectURL(objectUrl);

  } catch (error) {
    console.error('文件下载失败:', error);
    // 可根据不同错误类型细化提示（如网络错误、权限错误等）
    alert('下载失败，请检查网络或权限');
  }
}

// 使用示例 ————————————————————————————————
// 基础 GET 请求
downloadFile('https://api.example.com/download/file.pdf');

// 带自定义文件名和请求头
downloadFile(
  'https://api.example.com/export-data',
  'report.xlsx', // 手动覆盖文件名
  {
    headers: { 'Authorization': 'Bearer your_token_here' },
    params: { startDate: '2023-01-01', endDate: '2023-12-31' }
  }
);

// POST 请求示例（需后端支持）
downloadFile('https://api.example.com/generate-pdf', 'document.pdf', {
  method: 'post',
  data: { content: '生成PDF的文本内容' }
});
```

## 关键点说明

### Blob 处理

- 通过 responseType: 'blob 确保正确接收二进制数据
- 自动识别 MIME 类型，避免文件损坏（如 Excel 文件需正确识别为 application/vnd.openxmlformats-officedocument.spreadsheetml.sheet）

### 文件名优先级

- 手动指定的文件名优先级最高
- 若未指定，尝试从 Content-Disposition 响应头解析（需注意跨域限制）

### 资源清理

- 下载后立即调用 revokeObjectURL 释放内存
- 移除临时创建的 <a> 标签

### 错误处理

- 捕获网络错误、权限错误、服务器 4xx/5xx 错误
- 可扩展不同错误类型的用户提示（如权限不足时引导登录）

### 扩展性

- 支持 GET/POST 等任意请求方法
- 允许自定义请求头、参数等配置
