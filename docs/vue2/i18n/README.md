---
title: I18n
order: 1
group:
  title: 国际化
  order: 6
---

## 快速使用

安装`vue-i18n`插件

:::code-group

```shell [pnpm]
pnpm add vue-i18n
```

```shell [yarn]
yarn add vue-i18n
```

```shell [npm]
npm install vue-i18n
```

:::


安装完毕后，在项目入口文件（如`main.js`）中，引入并安装插件：

```javascript
import Vue from 'vue';
import VueI18n from 'vue-i18n';

// 关键步骤1：安装插件
Vue.use(VueI18n); // 必须调用！

// 关键步骤2：创建实例
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh: { hello: '你好' },
    en: { hello: 'Hello' }
  }
});

// 关键步骤3：注入根实例
new Vue({
  i18n, // 必须注入！
  render: h => h(App)
}).$mount('#app');
```

:::info{title=提示}
在`new VueI18n`前，需要先执行`Vue.use(VueI18n)`, 否则代码会报错 `Uncaught TypeError: Cannot read properties of undefined (reading 'config')`
:::

## 常见问题

### 避免在组件外错误访问 $i18n

在非组件上下文中（如普通 JS 文件），不能直接使用 this.$i18n。应改用以下方式：

```javascript
// 错误 ❌
const locale = this.$i18n.locale;

// 正确 ✅ 直接使用 i18n 实例
import i18n from '@/plugins/i18n'; // 导出创建好的实例
const locale = i18n.locale;
```

### 排查构建工具问题

如果使用 `Webpack`/`Vite`，检查是否因依赖版本冲突导致:

- 升级到兼容版本：vue-i18n@8.28.2要求 vue@^2.6.0

- 确保未引入多个 Vue 版本（常见于某些库自带 Vue）
