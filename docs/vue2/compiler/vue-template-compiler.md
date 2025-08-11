---
title: 模板解析
order: 1
group:
  title: 编译器
  order: 3
---


## 构建时编译

```javascript
import Vue from 'vue'

import { compile } from 'vue-template-compiler';

const template = `
<div>
  <p>hello world</p>
  <div>点击次数: {{ count }}</div>
  <button @click="handleClick">点击</button>
</div>
`

const compiled = compile(`${template}`);

function render() {
  return new Function(compiled.render).call(this)
}

const staticRenderFns = compiled.staticRenderFns.map((fn) => {
  return new Function(fn)
})

const app = new Vue({
  data() {
    return {
      count: 0
    }
  },
  render,
  staticRenderFns: staticRenderFns,
  methods: {
    handleClick() {
      this.count++
    }
  }
})

app.$mount('#app')
```

## 解析sfc模板

```javascript
import Vue from 'vue'

import { compile, parseComponent } from 'vue-template-compiler'

const template = `
<template>
  <div>
    <p>hello world</p>
    <div>点击次数: {{ count }}</div>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count++
    }
  }
}
</script>
`

const parsed = parseComponent(`${template}`);

const { template: sfcTemplate, script } = parsed;

const compiled = compile(sfcTemplate.content);

function render() {
  return new Function(compiled.render).call(this)
}

const staticRenderFns = compiled.staticRenderFns.map((fn) => {
  return new Function(fn)
})

// 将 script 内容转换为组件选项， 只是简单处理, 实际上应该使用 babel 等工具进行转换
const scriptContent = script.content.replace('export default', 'return')

const app = new Vue({
  render,
  staticRenderFns: staticRenderFns,
  ...new Function(scriptContent)()
})

app.$mount('#app')
```


## 使用


```typescript
import { parseComponent, compile } from "vue-template-compiler";
import { COMP_IDENTIFIER, CompileOptions } from "@/compiler/index";

function generatorRenderFunction(render: string) {
  return `
function render(h) {
    const fun = new Function(\`${ render }\`);
    return fun.call(this);
}
`
}

export interface CompileOptions {
  id: string;
  filename: string;
  code: string;
}


export function compileSFC(code: string) {
  const parsed = parseComponent(code);
  let scriptContent = parsed.script ? parsed.script.content : 'export default {}';
  scriptContent = scriptContent.trim().replace('export default', '')
  let js = scriptContent;
  if (parsed.template) {
    const compiled = compile(parent.template.content);
    js += generatorRenderFunction(compiled.render);
  }
  return {
    js,
    css: ''
  }
}
```
