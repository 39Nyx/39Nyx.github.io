---
title: 技术栈
order: 1
group:
  title: 扩展
---

为 dumi 开发添加一个技术栈插件，其核心是实现 `IDumiTechStack` 接口。可以通过 `defineTechStack` 方法实现, 下面是一段为`vue3 ssfc`技术栈的实现

```typescript
import { compile, compiler } from '@/compiler/node';
import { logger } from 'dumi/plugin-utils';
import type { IDumiTechStackRuntimeOpts } from 'dumi/tech-stack-utils';
import { defineTechStack, wrapDemoWithFn } from 'dumi/tech-stack-utils';
import hashId from 'hash-sum';

export const VueSfcTechStack = (runtimeOpts: IDumiTechStackRuntimeOpts) =>
  defineTechStack({
    name: 'vue3-sfc',
    runtimeOpts,
    isSupported(_, lang: string) {
      return ['vue'].includes(lang);
    },
    onBlockLoad(args) {
      if (!args.path.endsWith('.vue')) return null;
      const result = compiler.compileSFC({
        id: args.path,
        code: args.entryPointCode,
        filename: args.filename,
      });
      return {
        type: 'tsx',
        content: Array.isArray(result) ? '' : result.js,
      };
    },
    transformCode(raw, opts) {
      if (opts.type === 'code-block') {
        const filename = opts.fileAbsPath;
        const id = hashId(raw);
        const js = compile({ id, filename, code: raw });
        if (Array.isArray(js)) {
          logger.error(js);
          return '';
        }
        const code = wrapDemoWithFn(js, {
          filename,
          parserConfig: {
            syntax: 'ecmascript',
          },
        });
        return `(${code})()`;
      }
      return raw;
    },
  });
```

## transformCode

编译转换, 将`vue`代码转换为`js`和`css`代码

```typescript
defineTechStack({
  /**
   * 编译转换
   * @param raw 原始代码
   * @param opts 选项
   * @param opts.type 类型 'external' | 'code-block'
   * @param opts.fileAbsPath 文件绝对路径
   */
  transformCode(raw: string, opts: { type: string; fileAbsPath: string }) {

  }
})
```

例如在`md`文件中使用`vue`代码块

```vue
<script>
export default {
  name: 'FooView',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div>
    <h1>Foo</h1>
    <p>Count: {{ count }}</p>
    <button @click="count++">点击增加</button>
  </div>
</template>
```

经过`transformCode`中使用时

raw就是

```vue
<script>
export default {
  name: 'FooView',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <div>
    <h1>Foo</h1>
    <p>Count: {{ count }}</p>
    <button @click="count++">点击增加</button>
  </div>
</template>
```

而`opts`就是

```javascript
const opts = {
  type: 'code-block',
  // fileAbsPath 就是文件绝对路径, 中间内容做了屏蔽处理
  fileAbsPath: '/Users/<用户名>/<项目名>/src/Foo/index.vue'
}
```

经过一系列的转换，最终返回的`IIFE`表达式内容如下

```javascript
(async function() {
  const __sfc__ = {
    name: 'FooView',
    data () {
      return {
        count: 0
      };
    }
  };
  const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock } = await import("vue");
  function render(_ctx, _cache) {
    return _openBlock(), _createElementBlock("div", null, [
      _cache[1] || (_cache[1] = _createElementVNode("h1", null, "Foo", -1 /* HOISTED */ )),
      _createElementVNode("p", null, "Count: " + _toDisplayString(_ctx.count), 1 /* TEXT */ ),
      _createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = ($event)=>_ctx.count++)
      }, "点击增加")
    ]);
  }
  __sfc__.render = render;
  __sfc__.__id__ = "51bcc07b";
  return {
    default: __sfc__
  };
})()
```

