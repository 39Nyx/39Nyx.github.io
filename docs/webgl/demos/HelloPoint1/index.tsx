import React, { useEffect, useRef } from 'react';
import { getWebGLContext, initShaders } from '../utils';
import vShader from '!!raw-loader!./vShader.glsl';
import fShader from '!!raw-loader!./fShader.glsl';

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const gl = getWebGLContext(canvas);
      if (gl) {
        if (!initShaders(gl, vShader, fShader)) {
          console.log('着色器初始化失败.');
          return;
        }
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0, 1);
      }
    }
  }, []);
  return (
    <canvas ref={ canvasRef } width={ 300 } height={ 300 }></canvas>
  );
};

export default App;
