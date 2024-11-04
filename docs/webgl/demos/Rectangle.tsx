import React, { useEffect, useRef } from 'react';

export const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      // 获取绘制二维图形上下文
      const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
      if (ctx) {
        // 设置填充颜色
        ctx.fillStyle = '#2ff3dc';
        // 绘制矩形
        ctx.fillRect(120, 10, 150, 150);
      }
    }
  }, []);
  return <canvas ref={canvasRef} width="300" height="300"></canvas>;
};

export default App;
