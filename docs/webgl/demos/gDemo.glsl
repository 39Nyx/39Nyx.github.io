precision mediump float;

attribute vec2 a_pos;

uniform vec4 u_color;
uniform vec2 u_resolution;
uniform vec2 u_translate;

varying vec4 v_color;

void main() {
  vec2 real_poistion = (a_pos+u_translate) / u_resolution * 2.0 - 1.0;
  gl_Position = vec4(real_poistion * vec2(1, 1), 0, 1);
  v_color = u_color;
}
