import React, { useEffect, useRef } from 'react';
import { getWebGLContext } from './utils';

export const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const ctx: WebGLRenderingContext | null = getWebGLContext(canvas);
      if (ctx) {
        // 指定清空canvas的颜色
        ctx.clearColor(0.0, 1.0, 0.0, 1.0);
        // 执行清空canvas操作
        ctx.clear(ctx.COLOR_BUFFER_BIT);
      }
    }
  }, []);
  return <canvas ref={canvasRef} width={300} height={300}></canvas>;
};

export default App;
