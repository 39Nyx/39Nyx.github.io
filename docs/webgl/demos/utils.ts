export function getWebGLContext(
  canvas: HTMLCanvasElement,
): WebGLRenderingContext | null {
  const names: string[] = [
    'webgl',
    'experimental-webgl',
    'webkit-3d',
    'moz-webgl',
  ];
  let context: WebGLRenderingContext | null = null;
  for (let i: number = 0; i < names.length; i++) {
    try {
      const ctx: RenderingContext | null = canvas.getContext(names[i]);
      if (ctx) {
        context = ctx as WebGLRenderingContext;
        break;
      }
    } catch (err) {
      console.error(err);
    }
  }
  return context;
}
