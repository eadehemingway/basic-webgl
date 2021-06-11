
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 pixels = gl_FragCoord.xy/u_resolution;
    vec2 mouse = u_mouse.xy/u_resolution;
    float red = mouse.x;
    float green = mouse.y;
    float blue = pixels.x;
	gl_FragColor = vec4(red, green, blue, 1.0);
}
