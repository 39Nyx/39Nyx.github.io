---
title: 代码块
order: 1
group:
  title: 扩展
  order: 2
---

## 定制代码块

`dumi`渲染代码块主要使用`SourceCode`组件，只需要将这个组件替换为自己的组件即可，下面是定制代码块的步骤：

在`.dumi/theme/builtins/SourceCode`目录下创建`index.tsx`文件，没有该目录手动创建即可, `.dumi`和`src`、`docs`目录同级, 内容如下：

```typescript jsx
import OriginSourceCode, {
  ISourceCodeProps,
} from 'dumi/theme-default/builtins/SourceCode';
import * as monaca from 'monaco-editor';
import React, { useEffect, useRef } from 'react';

const SourceCode: React.FC<ISourceCodeProps> = (props) => {
  // 简单语言直接使用原组件渲染
  const simpleLanguages: string[] = ['text', 'shell'];
  if (!props.lang || simpleLanguages.includes(props.lang)) {
    return <OriginSourceCode {...props}>{props.children}</OriginSourceCode>;
  }
  // 代码行数
  const lineCount: number = props.children.split('\n').length;
  // 语言映射, 这里我只添加了 ts 和 tsx, 遇到其他不适配的在添加即可
  const languageMap: any = {
    ts: 'typescript',
    tsx: 'typescript',
  };
  const ref = useRef<any>(null);
  useEffect(() => {
    const editor = monaca.editor.create(ref.current, {
      value: props.children,
      language: languageMap[props.lang] || props.lang,
      readOnly: true,
      wordWrap: 'on',
      automaticLayout: true,
      scrollBeyondLastLine: false,
    });
  }, []);
  // 其他语言使用monaco渲染
  return (
    <pre
      style={{
        // lineCount本来需要乘以 18， 为了不显示太多，我这里改为了 10
        height: `${lineCount * 10 + 20}px`,
      }}
      ref={ref}
    ></pre>
  );
};

export default SourceCode;
```
