
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float y_value){

// The other unique function is known as smoothstep().
// Given a range of two numbers and a value, this function
// will interpolate the value between the defined range.
// The two first parameters are for the beginning and end
// of the transition, while the third is for the value to interpolate.
  return  smoothstep( y_value-0.02, y_value, st.y) -
          smoothstep( y_value, y_value+0.02, st.y);
}

float getYCoordinate(float x_coor){
  return x_coor;
//   return pow(x_coor,0.02);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    float y = getYCoordinate(st.x);

    vec3 color = vec3(y);

    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}