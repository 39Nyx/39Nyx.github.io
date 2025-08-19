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

```vue | pure
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

## 二次封装

二次封装是在异步加载地图的基础上，将百度的api根据业务需求进行二次封装

```javascript
import { ak } from './ak.js'

function loadMap() {
  return new Promise((resolve, reject) => {
    if (typeof BMapGL !== 'undefined') {
      return resolve(BMapGL)
    }
    window.BMapGL_loadScriptTime = (new Date).getTime()
    window.BMapGL = window.BMapGL || {}
    window.BMapGL.apiLoad = function () {
      delete window.BMapGL.apiLoad
      resolve(BMapGL)
    }
    const s = document.createElement('script')
    s.src = `http://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=${ ak }&services=&t=${ new Date().getTime() }`
    s.onerror = reject
    document.body.appendChild(s)
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    link.setAttribute('href', 'http://api.map.baidu.com/res/webgl/10/bmap.css')
    document.getElementsByTagName('head')[0].appendChild(link)
  })
}

// 创建一个代理处理器，用于自动等待地图初始化
function createMapMethodProxy(map) {
  return {
    get(target, prop) {
      // 如果是原始属性或方法，直接返回
      if (prop in target) {
        const originalValue = target[prop];
        
        // 如果是函数，返回一个代理函数
        if (typeof originalValue === 'function') {
          return function(...args) {
            // 确保地图已初始化后再调用方法
            return target.ready().then(() => {
              return originalValue.apply(target, args);
            });
          };
        }
        return originalValue;
      }
      
      // 如果是地图实例的方法，创建一个代理方法
      if (target.map && typeof target.map[prop] === 'function') {
        return function(...args) {
          return target.ready().then(() => {
            return target.map[prop].apply(target.map, args);
          });
        };
      }
      
      return undefined;
    }
  };
}

export class Map {
  constructor(el) {
    this.el = el;
    this._initPromise = null;
    this.map = null;
    this.BMapGL = null;
    
    // 初始化地图
    this._initPromise = this.init(el);
    
    // 创建代理，使所有方法自动等待地图初始化
    return new Proxy(this, createMapMethodProxy(this));
  }

  // 返回初始化完成的Promise
  ready() {
    return this._initPromise;
  }

  async init(el) {
    this.BMapGL = await loadMap();
    this.map = new this.BMapGL.Map(el);
    this.map.centerAndZoom('长沙市', 12);
    this.map.enableScrollWheelZoom(); // 启用滚轮放大缩小
    return this;
  }

  // 示例方法 - 不需要手动await
  render() {
    console.log(this.map);
    debugger;
    // 不需要return任何内容，代理会自动处理等待
  }
  
  // 添加更多地图方法示例
  setCenter(point) {
    this.map.setCenter(point);
  }
  
  setZoom(zoom) {
    this.map.setZoom(zoom);
  }
  
  // 以下是一些常用的百度地图方法示例
  // 这些方法不需要在Map类中显式定义，可以通过代理直接访问
  
  /**
   * 添加标记点
   * @param {Object} options - 标记点选项
   * @returns {Object} 创建的标记点对象
   */
  addMarker(options = {}) {
    // 创建标记点
    const point = new this.BMapGL.Point(options.lng || 116.404, options.lat || 39.915);
    const marker = new this.BMapGL.Marker(point, {
      title: options.title || '',
      enableDragging: options.draggable || false
    });
    
    // 添加到地图
    this.map.addOverlay(marker);
    
    // 如果有信息窗口内容，则添加点击事件
    if (options.infoWindow) {
      const infoWindow = new this.BMapGL.InfoWindow(options.infoWindow, {
        width: options.infoWidth || 250,
        height: options.infoHeight || 100,
        title: options.infoTitle || ''
      });
      
      marker.addEventListener('click', () => {
        marker.openInfoWindow(infoWindow);
      });
    }
    
    return marker;
  }
  
  /**
   * 添加折线
   * @param {Array} points - 折线点数组 [{lng, lat}, ...]
   * @param {Object} options - 折线选项
   * @returns {Object} 创建的折线对象
   */
  addPolyline(points, options = {}) {
    const bPoints = points.map(p => new this.BMapGL.Point(p.lng, p.lat));
    const polyline = new this.BMapGL.Polyline(bPoints, {
      strokeColor: options.strokeColor || '#1869AD',
      strokeWeight: options.strokeWeight || 3,
      strokeOpacity: options.strokeOpacity || 1
    });
    
    this.map.addOverlay(polyline);
    return polyline;
  }
  
  /**
   * 添加圆形覆盖物
   * @param {Object} center - 圆心坐标 {lng, lat}
   * @param {Number} radius - 半径，单位米
   * @param {Object} options - 圆形选项
   * @returns {Object} 创建的圆形对象
   */
  addCircle(center, radius, options = {}) {
    const point = new this.BMapGL.Point(center.lng, center.lat);
    const circle = new this.BMapGL.Circle(point, radius, {
      strokeColor: options.strokeColor || '#1869AD',
      strokeWeight: options.strokeWeight || 2,
      strokeOpacity: options.strokeOpacity || 1,
      fillColor: options.fillColor || '#1869AD',
      fillOpacity: options.fillOpacity || 0.3
    });
    
    this.map.addOverlay(circle);
    return circle;
  }
  
  /**
   * 设置地图视图范围，使所有标记点都可见
   * @param {Array} points - 点数组 [{lng, lat}, ...]
   */
  setViewport(points) {
    const bPoints = points.map(p => new this.BMapGL.Point(p.lng, p.lat));
    this.map.setViewport(bPoints);
  }
  
  /**
   * 清除所有覆盖物
   */
  clearOverlays() {
    this.map.clearOverlays();
  }
  
  /**
   * 添加控件
   * @param {String} type - 控件类型: 'scale', 'zoom', 'navigation', 'maptype'
   * @param {Object} options - 控件选项
   */
  addControl(type, options = {}) {
    let control;
    
    switch(type.toLowerCase()) {
      case 'scale':
        control = new this.BMapGL.ScaleControl(options);
        break;
      case 'zoom':
        control = new this.BMapGL.ZoomControl(options);
        break;
      case 'navigation':
        control = new this.BMapGL.NavigationControl3D(options);
        break;
      case 'maptype':
        control = new this.BMapGL.MapTypeControl(options);
        break;
      default:
        console.warn('未知的控件类型:', type);
        return;
    }
    
    this.map.addControl(control);
    return control;
  }
}
```

使用方法

```javascript
import './style.css'

import { Map } from './map.js'

const app = document.querySelector('#app')

const map = new Map(app)

// 初始化地图后的操作示例
document.addEventListener('DOMContentLoaded', () => {
  // 1. 基本地图操作
  map.setZoom(14)  // 设置缩放级别
  
  // 2. 添加标记点
  const marker1 = map.addMarker({
    lng: 112.982279, 
    lat: 28.19409,
    title: '长沙市中心',
    draggable: true,
    infoWindow: '这是长沙市中心',
    infoTitle: '地点信息'
  })
  
  // 3. 添加折线
  const points = [
    { lng: 112.982279, lat: 28.19409 },
    { lng: 112.992279, lat: 28.20409 },
    { lng: 113.002279, lat: 28.19409 }
  ]
  const polyline = map.addPolyline(points, {
    strokeColor: '#FF0000',
    strokeWeight: 4
  })
  
  // 4. 添加圆形覆盖物
  const circle = map.addCircle(
    { lng: 112.982279, lat: 28.19409 }, 
    1000,  // 1000米半径
    {
      strokeColor: '#00FF00',
      fillColor: '#00FF00',
      fillOpacity: 0.2
    }
  )
  
  // 5. 设置视图，使所有点都可见
  map.setViewport(points)
  
  // 6. 添加控件
  map.addControl('scale')  // 比例尺控件
  map.addControl('zoom')   // 缩放控件
  
  // 7. 直接调用百度地图原生方法示例
  // 创建一个点
  setTimeout(() => {
    // 确保地图已完全加载
    const point = new map.BMapGL.Point(113.002279, 28.20409)
    
    // 平滑移动到该点
    map.panTo(point)  // 注意这里直接调用了map.panTo而不是map.map.panTo
    
    // 添加一个自定义图标的标记
    const myIcon = new map.BMapGL.Icon(
      'https://api.map.baidu.com/images/marker_red.png',
      new map.BMapGL.Size(23, 25)
    )
    
    const marker = new map.BMapGL.Marker(point, { icon: myIcon })
    map.addOverlay(marker)  // 直接调用addOverlay方法
    
    // 添加点击事件
    marker.addEventListener('click', () => {
      alert('你点击了标记点！')
    })
  }, 2000)
  
  // 8. 清除所有覆盖物的按钮
  const clearButton = document.createElement('button')
  clearButton.textContent = '清除所有覆盖物'
  clearButton.style.position = 'absolute'
  clearButton.style.top = '10px'
  clearButton.style.left = '10px'
  clearButton.style.zIndex = '1000'
  clearButton.onclick = () => map.clearOverlays()
  document.body.appendChild(clearButton)
})
```
