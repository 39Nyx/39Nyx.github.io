---
title: 集成 Excalidraw
order: 2
group:
  title: 扩展
  order: 2
---

## 集成 Excalidraw

将Excalidraw集成到dumi中，可以直接加载`excalidraw`文件，并在页面中展示, 实现各种图形的展示。

例如在公共资源目录下新建`excalidraw`后缀的文件，`Webstorm`安装`excalidraw integration`插件， 直接在编辑器上打开文件然后编辑即可

### 安装依赖

```bash
pnpm add @excalidraw/excalidraw
```

### 使用

在`.dumi/theme/builtins`新建`FlowDraw/index.tsx`文件, 内容如下：

```typescript jsx
import { Excalidraw } from '@excalidraw/excalidraw';
import axios from 'axios';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';

const FlowDraw: React.FC<any> = (props) => {
  const [initialData, setInitialData] = useState<any>({});
  const [drawAPI, setDrawAPI] = useState<any>({});
  const { height = '500px' } = props;
  useEffect(() => {
    // 通过发送请求获取excalidraw文件内容
    axios.get(props.src).then((res) => {
      setInitialData(res.data);
    });
  }, []);

  useEffect(() => {
    if (!isEmpty(initialData) && drawAPI?.updateScene) {
      drawAPI?.updateScene(initialData);
    }
  }, [drawAPI, initialData]);
  return (
    <div style={{ height: height }}>
      <Excalidraw
        initialData={initialData}
        excalidrawAPI={(api: any) => {
          setDrawAPI(api);
        }}
      />
    </div>
  );
};

export default FlowDraw;
```

然后在`.md`文件中引入组件，并设置`src`属性为Excalidraw的文件地址，其中`excalidraw`文件可以放在公共资源目录文件中

```html
<FlowDraw src="/draw/webgl/canvas坐标系.excalidraw" height="600px"></FlowDraw>
```

这样就可以在页面中展示Excalidraw画布了

由于`Excalidraw`的一些文件是从`CDN`(`https://unpkg.com/@excalidraw/excalidraw/dist/`)加载的，如果网络不够好的情况下，可能界面会一直处于加载中，那么可以将`node_modules/@excalidraw/excalidraw/dis`目录下的`excalidraw-assets`（用于生产）文件夹和`excalidraw-assets-dev`(用于开发)文件夹复制到公共资源目录中，我将这两个文件夹放在`public/draw`目录下

然后在入口文件中设置`window.EXCALIDRAW_ASSET_PATH`的值指向`public`下的`draw`目录, 由于我在dumi中并没有找到入口文件，但是在`dumirc.ts`中可以配置`headScripts`， 在`headScripts`中添加内容即可

```typescript
export default defineConfig({
  headScripts: [
    'window.EXCALIDRAW_ASSET_PATH = "/draw/";'
  ],
})
```

## 问题

- 在`Webstorm`中编辑后，图形的位置会出现偏移, 不过可以拖动，这个问题暂可以接受，后续有时间在进行优化

- 在切换暗黑主题后，没有切换成暗黑主题, 这个后续优化吧
