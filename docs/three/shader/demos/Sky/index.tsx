import React, { MutableRefObject, useEffect, useRef } from 'react';
import {
  ACESFilmicToneMapping,
  MathUtils,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Sky } from 'three/examples/jsm/objects/Sky';
import { useStyles } from './styles';

const App: React.FC = () => {
  const { styles } = useStyles();
  const containerRef: MutableRefObject<any> = useRef(null);
  let camera: PerspectiveCamera;
  const scene = new Scene();
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  let controls: OrbitControls;

  // Sky
  const sky: Sky = new Sky();
  sky.scale.setScalar(450000);
  scene.add(sky);
  const sun = new Vector3();
  const animate = () => {
    if (camera) {
      renderer.render(scene, camera);
    }
  };
  const init = () => {
    if (containerRef.current) {
      const element: HTMLElement = containerRef.current;
      camera = new PerspectiveCamera(
        60,
        element.clientWidth / element.clientHeight,
        100,
        2000000,
      );
      camera.position.set(0, 100, 2000);

      renderer.setSize(element.clientWidth, element.clientHeight);
      renderer.toneMapping = ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.5;
      renderer.setAnimationLoop(animate);

      element.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.enablePan = false;
    }
  };

  const initSky = () => {
    const uniforms = sky.material.uniforms;
    uniforms['turbidity'].value = 10;
    uniforms['rayleigh'].value = 3;
    uniforms['mieCoefficient'].value = 0.005;
    uniforms['mieDirectionalG'].value = 0.7;

    const phi = MathUtils.degToRad(90 - 2);
    const theta = MathUtils.degToRad(180);
    sun.setFromSphericalCoords(1, phi, theta);
    uniforms['sunPosition'].value.copy(sun);
  };
  useEffect(() => {
    init();
    initSky();
  }, []);
  return <div className={styles.container} ref={containerRef}></div>;
};

export default App;
