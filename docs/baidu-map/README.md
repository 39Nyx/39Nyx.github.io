---
title: 百度地图
order: 1
---

## 创建GL地图

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>地图展示</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <style>
        body,
        html,
        #container {
            overflow: hidden;
            width: 100%;
            height: 100%;
            margin: 0;
            font-family: "微软雅黑";
        }
        .info {
            z-index: 999;
            width: auto;
            min-width: 22rem;
            padding: .75rem 1.25rem;
            margin-left: 1.25rem;
            position: fixed;
            top: 1rem;
            background-color: #fff;
            border-radius: .25rem;
            font-size: 14px;
            color: #666;
            box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
        }
    </style>
    <script src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=ak密钥"></script>
</head>
<body>
<div class = "info">最新版GL地图命名空间为BMapGL, 可按住鼠标右键控制地图旋转、修改倾斜角度。</div>
<div id="container"></div>
</body>
</html>
<script>
  const map = new BMapGL.Map('container'); // 创建Map实例
  map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 12); // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom(); // 开启鼠标滚轮缩放
</script>
```

这里需要注意脚本参数需要设置`type=webgl`才有`BMapGL`，不然使用`BMapGL.Map`会报错。

## 异步加载地图

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>异步加载地图</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <style>
        body,
        html,
        #container {
            overflow: hidden;
            width: 100%;
            height: 100%;
            margin: 0;
            font-family: "微软雅黑";
        }
    </style>
</head>
<body>
<div id="container"></div>
</body>
</html>
<script>
  function loadJScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//api.map.baidu.com/api?type=webgl&v=1.0&ak=ak密钥&callback=init';
    document.body.appendChild(script);
  }
  function init() {
    const map = new BMapGL.Map('container'); // 创建Map实例
    const point = new BMapGL.Point(116.404, 39.915); // 创建点坐标
    map.centerAndZoom(point, 10);
    map.enableScrollWheelZoom(); // 启用滚轮放大缩小
  }
  window.onload = loadJScript; // 异步加载地图
</script>
```

这里脚本加载时使用`callback`参数指定回调函数`init`，在回调函数中创建`BMapGL.Map`实例,其实大致逻辑如下

创建一个`script`标签，标签的`src`指定脚本地址, 脚本返回内容是一个`IIFE`函数

```javascript
(function() {
    window.BMapGL_loadScriptTime = (new Date).getTime();
    window.BMapGL = window.BMapGL || {};
    window.BMapGL.apiLoad = function() {
        delete window.BMapGL.apiLoad;
        if (typeof init == "function") {
          // 这里调用在脚本里面设置的callback函数, init方法是在加载//api.map.baidu.com/api脚本里面的`script`提前定义好的
          init()
        }
    };
    // 加载脚本
    const s = document.createElement('script');
    s.src = 'http://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=ak密钥&services=&t=20250811163045';
    document.body.appendChild(s);
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'http://api.map.baidu.com/res/webgl/10/bmap.css');
    document.getElementsByTagName('head')[0].appendChild(link);
}
)();
```

## 异步加载地图-进阶版

在`vue`或者`react`项目中，如果在入口文件的`index.html`文件中，加载百度地图(//api.map.baidu.com/api?type=webgl&v=1.0&ak=ak密钥)的脚本，也是可以

但是有时候希望只有在使用百度地图服务的时候才加载地图服务，进入其他使用地图的界面，不需要在重新加载地图，这时可以做一下小小的优化

使用`Promise`来异步加载地图，在需要使用地图的地方，先调用`loadMap`方法，传入`akProxyUrl`参数，返回一个`Promise`对象，在`Promise`对象的`then`方法中，可以获取到`BMapGL`对象，然后就可以使用地图了

```javascript
export function loadMap(akProxyUrl) {
  return new Promise((resolve, reject) => {
    if (typeof BMapGL !== 'undefined') {
      return resolve(BMapGL)
    }
    const _init = () =>{
      resolve(BMapGL)
    }
    window.BMapGL_loadScriptTime = (new Date).getTime();
    window.BMapGL = window.BMapGL || {};
    window.BMapGL.apiLoad = function() {
      delete window.BMapGL.apiLoad;
      if (typeof _init == "function") {
        _init()
      }
    };
    const s = document.createElement('script');
    s.src = 'http://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=ak密钥&services=&t=';
    s.src = akProxyUrl
    s.onerror = reject
    document.body.appendChild(s);
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'http://api.map.baidu.com/res/webgl/10/bmap.css');
    document.getElementsByTagName('head')[0].appendChild(link);
  })
}
```

然后在`vue`组件中使用

```vue
<template>
  <div ref="mapRef" id="map-container"></div>
</template>

<script>
import loadBMap from '@/utils/loadBMap';

export default {
  name: 'BaiduMap',
  data() {
    return {
      map: null
    };
  },
  async mounted() {
    try {
      // 加载百度地图API
      await loadBMap();
      
      // 初始化地图
      this.initMap();
    } catch (error) {
      console.error('地图加载失败:', error);
    }
  },
  methods: {
    initMap() {
      // 创建地图实例
      this.map = new BMap.Map(this.$refs.mapRef);
      
      // 创建点坐标
      const point = new BMap.Point(116.404, 39.915);
      
      // 初始化地图
      this.map.centerAndZoom(point, 15);
      this.map.enableScrollWheelZoom();
      
      // 添加标记
      new BMap.Marker(point).addTo(this.map);
      
      // 添加控件
      this.map.addControl(new BMap.NavigationControl());
    }
  }
};
</script>

<style>
#map-container {
  width: 100%;
  height: 500px;
}
</style>
```

:::info{title=提示}
这里并没有去加载`//api.map.baidu.com/api?type=webgl&v=1.0&ak=ak密钥&callback=init`脚本，而是直接加载的`//api.map.baidu.com/getscript?type=webgl&v=1.0&ak=ak密钥&services=&t=`脚本
:::

