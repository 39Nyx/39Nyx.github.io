import React, { RefObject, useEffect, useRef } from 'react';
import {
  AmbientLight,
  BoxGeometry,
  BufferGeometry,
  Camera,
  CatmullRomCurve3,
  DirectionalLight,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { Flow } from 'three/examples/jsm/modifiers/CurveModifier';
import { useStyles } from './styles';

const App: React.FC = () => {
  const { styles } = useStyles();
  const containerRef: RefObject<any> = useRef(null);
  const scene = new Scene();
  let camera: Camera | null = null;
  let renderer: WebGLRenderer | null = null;
  let controls: OrbitControls | null = null;
  const curveHandles: Mesh[] = [];
  let flow: Flow | null = null;

  const animate = () => {
    if (renderer && camera) {
      renderer.render(scene, camera);
    }

    if (flow) {
      flow.moveAlongCurve(0.001);
    }

    if (controls) {
      controls.update();
    }
  };
  const init = () => {
    if (containerRef.current) {
      camera = new PerspectiveCamera(
        40,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        1,
        1000,
      );
      camera.position.set(2, 2, 4);
      camera.lookAt(scene.position);

      const initialPoints = [
        { x: 1, y: 0, z: -1 },
        { x: 1, y: 0, z: 1 },
        { x: -1, y: 0, z: 1 },
        { x: -1, y: 0, z: -1 },
      ];

      const boxGeometry = new BoxGeometry(0.1, 0.1, 0.1);
      const boxMaterial = new MeshBasicMaterial();
      for (const point of initialPoints) {
        const handle = new Mesh(boxGeometry, boxMaterial);
        handle.position.copy(point);
        curveHandles.push(handle);
        scene.add(handle);
      }

      const curve: CatmullRomCurve3 = new CatmullRomCurve3(
        curveHandles.map((handle) => handle.position),
      );
      curve.curveType = 'centripetal';
      curve.closed = true;
      const points = curve.getPoints(50);
      const line: Line = new Line(
        new BufferGeometry().setFromPoints(points),
        new LineBasicMaterial({
          color: '#00ff00',
        }),
      );
      scene.add(line);

      const light = new DirectionalLight('#ffaa33', 3);
      light.position.set(10, 10, 10);
      scene.add(light);
      const ambientLight = new AmbientLight('#003973', 3);
      scene.add(ambientLight);

      const loader = new FontLoader();
      // regular.typeface.json文件放到公共资源目录下
      loader.load('/fonts/regular.typeface.json', (font) => {
        const geometry = new TextGeometry('hello world!', {
          font: font,
          size: 0.2,
          depth: 0.05,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.02,
          bevelSize: 0.01,
          bevelOffset: 0,
          bevelSegments: 5,
        });
        geometry.rotateX(Math.PI);
        const material = new MeshStandardMaterial({
          color: '#99ffff',
        });
        const textMesh = new Mesh(geometry, material);
        flow = new Flow(textMesh);
        flow.updateCurve(0, curve);
        scene.add(flow.object3D);
      });

      renderer = new WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight,
      );
      renderer.setAnimationLoop(animate);
      containerRef.current.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
    }
  };
  useEffect(() => {
    init();
  }, []);
  return <div className={styles.container} ref={containerRef}></div>;
};

export default App;
