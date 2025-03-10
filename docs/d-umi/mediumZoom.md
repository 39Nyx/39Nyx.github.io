---
title: 图片缩放
order: 4
group:
  title: 扩展
---

## 目录创建

在项目的`docs`同级目录新建`plugin`文件夹, 在`plugin`文件夹下新建`medium-zoom.ts`文件, 目录结构如下

<Tree>
  <ul>
    <li>docs<ul></ul></li>
    <li>
      plugin
      <ul>
        <li>medium-zoom.ts </li>
      </ul>
    </li>
  </ul>
</Tree>

## 声明插件

```typescript
import { IApi } from "dumi";

export default (api: IApi) => {
  api.describe({
    key: 'medium-zoom'
  })
}
```

## 注册hook

使用`register`方法注册给`applyPlugins`方法使用的hook, 并更改生成`img`标签的内容，给其加上`zoom-able`类名，并添加`data-zoom-able`属性

```typescript
import { IApi, unistUtilVisit } from "dumi";


const mediumZoomPlugin = () => {
  return (tree: any) => {
    unistUtilVisit.visit(tree, 'image', (node, index, parent) => {
      parent!.children.splice(index!, 1, {
        type: 'html',
        value: `<img src="${node.url}" alt="${node.alt}" class="zoom-able" data-zoom-able />`,
      });
    })
  }
}


export default (api: IApi) => {
  api.register({
    key: 'modifyConfig',
    stage: Infinity,
    fn: (memo: IApi['config']) => {
      const cloneExtraRemarkPlugins = memo.extraRemarkPlugins;

      memo.extraRemarkPlugins = [
        mediumZoomPlugin,
        ...(Array.isArray(cloneExtraRemarkPlugins)
          ? cloneExtraRemarkPlugins
          : ([cloneExtraRemarkPlugins].filter(Boolean) as any)),
      ];
      return memo
    }
  })
}
```

## 修改HTML

在body标签后插入脚本内容， 使用事件委托实现图片放大效果

```typescript
import { IApi } from "dumi";

export default (api: IApi) => {
  api.modifyHTML(($) => {
    $('body').append(`
      <script src="https://registry.npmmirror.com/medium-zoom/1.1.0/files/dist/medium-zoom.min.js"></script>
      <style>
        .zoom-able { cursor: zoom-in }
        .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 980 }
      </style>
      <script>
        const zoom = mediumZoom()
        // 给body标签绑定点击事件
        document.body.onclick = (e) => {
            if (e.type === 'click') {
                const target = e.target
                // 点击的元素有data-zoom-able属性，那么认为是图片，进行放大
                const dataZoomAble = target.attributes.getNamedItem('data-zoom-able')
                if (dataZoomAble) {
                    if (dataZoomAble.value === '') {
                        zoom.attach(target)
                        dataZoomAble.value = 'true'
                        target.attributes.setNamedItem(dataZoomAble)
                    }
                }
            }
        }
      </script>
    `);
    return $;
  });
}
```

## 使用插件

在`dumi.config.ts`中引入插件

```typescript
export default defineConfig({
  // ...
  plugins: [
    require.resolve('./plugin/medium-zoom.ts')
  ]
})
```
