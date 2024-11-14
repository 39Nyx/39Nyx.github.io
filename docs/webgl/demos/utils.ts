export function getWebGLContext(
  canvas: HTMLCanvasElement
): WebGLRenderingContext | null {
  const names: string[] = [
    'webgl',
    'experimental-webgl',
    'webkit-3d',
    'moz-webgl'
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

/**
 * 初始化着色器
 * @param gl webgl上下文
 * @param vShader 顶点着色器
 * @param fShader 片段着色器
 */
export function initShaders(gl: WebGLRenderingContext, vShader: string, fShader: string) {
  const program = createProgram(gl, vShader, fShader);
  if (!program) {
    console.log('Failed to create program');
    return false;
  }

  gl.useProgram(program);
  (gl as any).program = program;
  return true;
}

/**
 * 创建着色器程序
 * @param gl webgl上下文
 * @param vShader 顶点着色器
 * @param fShader 片段着色器
 */
function createProgram(gl: WebGLRenderingContext, vShader: string, fShader: string) {
  // Create shader object
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vShader);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fShader);
  if (!vertexShader || !fragmentShader) {
    return null;
  }

  // Create a program object
  const program = gl.createProgram();
  if (!program) {
    return null;
  }

  // Attach the shader objects
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  // Link the program object
  gl.linkProgram(program);

  // Check the result of linking
  const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    const error = gl.getProgramInfoLog(program);
    console.log('Failed to link program: ' + error);
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    return null;
  }
  return program;
}

/**
 * 加载着色器
 * @param gl webgl上下文
 * @param type 着色器类型
 * @param source 着色器源码
 */
function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
  // Create shader object
  const shader = gl.createShader(type);
  if (shader == null) {
    console.log('无法创建着色器对象');
    return null;
  }

  // Set the shader program
  gl.shaderSource(shader, source);

  // Compile the shader
  gl.compileShader(shader);

  // Check the result of compilation
  const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
    const error = gl.getShaderInfoLog(shader);
    console.log('编译着色器失败: ' + error);
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}
