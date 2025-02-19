---
title: 问题
order: 30
---

## does not provide an export named ‘default‘

在封装`axios`的时候，突然出现找不到`form-data`, 这个时候在`vite.config.js`中配置

```javascript
export default defineConfig({
    // ...
    optimizeDeps: {
        include: ['form-data']
    }
})
```
