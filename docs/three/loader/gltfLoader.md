---
title: gltf加载器
order: 1
group:
  title: 加载器
  order: 3
---

对于一些复杂的模型，我们一般都是让`3D建模师`创建好模型，我们直接使用即可，但是如果创建的模型比较大，例如几十几百MB的模型，加载模型的`所需时间` = `模型体积` / `服务器的最大带宽`，一般情况下，不可能加大`服务器的最大带宽`，毕竟加带宽是需要money的，所以只能减少模型的体积，减少模型体积一般有以下思路

- 优化纹理：根据要贴图的模型的尺寸，尽量减小纹理尺寸，一般情况下贴图大小不要超过2048x2048; 贴图压缩大小，建议图像大小512×512像素，分辨率72像素/英寸，图片文件大小每张不超过300KB
- 减少网格体的顶点和面数(本人暂时不会)
- 如果是`glb`文件, 那么可以更改文件的格式，采用gltf格式(.gltf + .bin + 纹理)，将一个文件分为多个文件来加载
- 使用工具对模型进行压缩, 本人用的是`Blender`

## 压缩加载

- 用`blender`导入`glb`格式的模型 
- 导出模型，勾选压缩选项, 最终格式还是`glb`

> 用Blender导出压缩过后的模型无法直接打开查看这个是正常的,使用GLTFLoader加载模型也会报错，这个时候需要使用DRACOLoader对模型进行解压

```typescript
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


// 压缩的几何图形加载器
const dracoLoader: DRACOLoader = new DRACOLoader()
// 设置解码器路径, 路径是放在公共资源目录下的, 从node_modules/three/examples/jsm/libs目录下把draco复制公共资源目录下
dracoLoader.setDecoderPath('assets/draco/gltf/')
const loader: GLTFLoader = new GLTFLoader()
// 设置加载器
loader.setDRACOLoader(dracoLoader)
// ferrari.glb 压缩过后的glb文件
loader.load('assets/models/gltf/ferrari.glb', (gltf: GLTF) => {
  
})
```

## 代码示例

```html
<div
  #container
  class="container"
></div>
```

```typescript
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import {
  ACESFilmicToneMapping,
  EquirectangularReflectionMapping,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MultiplyBlending,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  TextureLoader,
  WebGLRenderer
} from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

import { GroundProjectedSkybox } from 'three/examples/jsm/objects/GroundProjectedSkybox'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

@Component({
  selector: 'app-compress-model',
  templateUrl: './compress-model.component.html',
  styleUrls: ['./compress-model.component.scss']
})
export class CompressModelComponent implements AfterViewInit {

  @ViewChild('container', { static: false })
  container: ElementRef | undefined

  camera: PerspectiveCamera | undefined

  scene: Scene

  renderer: WebGLRenderer

  env: GroundProjectedSkybox | undefined

  controls: OrbitControls | undefined

  constructor() {
    this.scene = new Scene()
    this.renderer = new WebGLRenderer({
      antialias: true
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.toneMapping = ACESFilmicToneMapping
    this.renderer.setAnimationLoop(() => {
      if (this.camera) {
        this.renderer.render(this.scene, this.camera)
      }
    })
  }

  async ngAfterViewInit(): Promise<any> {
    this.renderer.setSize(this.container?.nativeElement.clientWidth, this.container?.nativeElement.clientHeight)
    const aspect: number = this.container?.nativeElement.clientWidth / this.container?.nativeElement.clientHeight
    this.camera = new PerspectiveCamera(40, aspect, 1, 1000)
    this.camera.position.set(-20, 7, 20)
    this.camera.lookAt(0, 4, 0)

    const hrdLoader = new RGBELoader()
    const envMap = await hrdLoader.loadAsync('assets/textures/equirectangular/blouberg_sunrise_2_1k.hdr')
    envMap.mapping = EquirectangularReflectionMapping
    this.env = new GroundProjectedSkybox(envMap)
    this.env.scale.setScalar(100)
    this.scene.add(this.env)
    this.scene.environment = envMap

    // 压缩的几何图形加载器
    const dracoLoader: DRACOLoader = new DRACOLoader()
    // 设置解码器路径, 路径是放在公共资源目录下的
    dracoLoader.setDecoderPath('assets/draco/gltf/')
    const loader: GLTFLoader = new GLTFLoader()
    // 设置加载器
    loader.setDRACOLoader(dracoLoader)
    const shadow = await new TextureLoader().loadAsync('assets/image/ferrari_ao.png')
    loader.load('assets/models/gltf/ferrari.glb', (gltf: GLTF) => {
      const bodyMaterial: MeshPhysicalMaterial = new MeshPhysicalMaterial({
        color: 0x000000,
        // 材质与金属的相似度 [0.0, 1.0],  默认值为0.0
        metalness: 1.0,
        // 材质的粗糙程度, 0.0表示平滑的镜面反射，1.0表示完全漫反射。默认值为1.0
        roughness: 0.8,
        clearcoat: 1.0,
        clearcoatRoughness: 0.2
      })

      const meshStandardMaterial: MeshStandardMaterial = new MeshStandardMaterial({
        color: 0xffffff,
        // 材质与金属的相似度 [0.0, 1.0],  默认值为0.0
        metalness: 1.0,
        // 材质的粗糙程度, 0.0表示平滑的镜面反射，1.0表示完全漫反射。默认值为1.0
        roughness: 0.5
      })

      const glassMaterial: MeshPhysicalMaterial = new MeshPhysicalMaterial({
        color: 0xffffff,
        // 材质与金属的相似度 [0.0, 1.0],  默认值为0.0
        metalness: 0.25,
        // 材质的粗糙程度, 0.0表示平滑的镜面反射，1.0表示完全漫反射。默认值为1.0
        roughness: 0,
        // 透光率（或者说透光性），范围从0.0到1.0。默认值是0.0
        transmission: 1.0
      })

      const cardModel = gltf.scene.children[0]
      cardModel.scale.multiplyScalar(4)
      cardModel.rotation.y = Math.PI
      // 设置车身颜色
      this.setModelMaterial(cardModel, 'body', bodyMaterial)
      // 设置四个轮子描边颜色
      this.setModelMaterial(cardModel, 'rim_fl', meshStandardMaterial)
      this.setModelMaterial(cardModel, 'rim_fr', meshStandardMaterial)
      this.setModelMaterial(cardModel, 'rim_rr', meshStandardMaterial)
      this.setModelMaterial(cardModel, 'rim_rl', meshStandardMaterial)
      // 设置座椅线条颜色
      this.setModelMaterial(cardModel, 'trim', meshStandardMaterial)
      // 设置车窗材质
      this.setModelMaterial(cardModel, 'glass', glassMaterial)

      // 车身倒影
      const mesh = new Mesh(
        new PlaneGeometry(0.655 * 4, 1.3 * 4),
        new MeshBasicMaterial({
          map: shadow,
          blending: MultiplyBlending,
          toneMapped: false,
          transparent: true
        })
      )
      mesh.rotation.x = -Math.PI / 2
      mesh.renderOrder = 2
      cardModel.add(mesh)
      this.scene.add(cardModel)
    })

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.target.set(0, 2, 0)
    this.controls.maxPolarAngle = MathUtils.degToRad(90)
    // 相机的最远距离
    this.controls.maxDistance = 80
    // 相机的最近距离
    this.controls.minDistance = 20
    // 摄像机平移, 默认为true
    this.controls.enablePan = false
    this.controls.update()
    this.container?.nativeElement.appendChild(this.renderer.domElement)
  }

  setModelMaterial(model: Object3D, objectName: string, material: MeshStandardMaterial | MeshPhysicalMaterial) {
    const object3D: any = model.getObjectByName(objectName)
    if (object3D) {
      object3D.material = material
    }
  }
}
```

参考资料： https://threejs.org/examples/?q=envma#webgl_materials_envmaps_groundprojected
