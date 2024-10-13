import React, { MutableRefObject, useEffect, useRef } from 'react';
import {
  ACESFilmicToneMapping,
  PerspectiveCamera,
  PlaneGeometry,
  RepeatWrapping,
  Scene,
  Texture,
  TextureLoader,
  Vector3,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Water } from 'three/examples/jsm/objects/Water';
import { useStyles } from './styles';

const App: React.FC = () => {
  const { styles } = useStyles();
  const containerRef: MutableRefObject<any> = useRef(null);
  const scene = new Scene();
  let camera: PerspectiveCamera;
  let water: Water;
  const renderer: WebGLRenderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setAnimationLoop(() => {
    if (camera) {
      renderer.render(scene, camera);
    }
    if (water) {
      water.material.uniforms.time.value += 1.0 / 60.0;
    }
  });
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5;
  let orbitControls: OrbitControls;

  const init = () => {
    if (containerRef.current) {
      const element: HTMLElement = containerRef.current;
      renderer.setSize(element.clientWidth, element.clientHeight);
      element.appendChild(renderer.domElement);

      camera = new PerspectiveCamera(
        55,
        element.clientHeight / element.clientHeight,
        1,
        20000,
      );
      camera.position.set(30, 30, 100);

      orbitControls = new OrbitControls(camera, renderer.domElement);
      orbitControls.maxPolarAngle = Math.PI * 0.495;
      orbitControls.target.set(0, 10, 0);
      orbitControls.maxDistance = 200;
      orbitControls.minDistance = 40;
      orbitControls.update();

      const waterGeometry = new PlaneGeometry(10000, 10000);
      water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new TextureLoader().load(
          '/textures/waterNormals.jpg',
          (texture: Texture) => {
            texture.wrapS = RepeatWrapping;
            texture.wrapT = RepeatWrapping;
          },
        ),
        sunDirection: new Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
        fog: scene.fog !== undefined,
      });
      water.rotation.x = -Math.PI / 2;
      scene.add(water);
    }
  };

  useEffect(() => {
    init();
  }, []);
  return <div className={styles.container} ref={containerRef}></div>;
};

export default App;
