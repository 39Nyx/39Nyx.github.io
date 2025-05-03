---
title: 模板解析
order: 1
group:
  title: 编译器
  order: 3
---

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
