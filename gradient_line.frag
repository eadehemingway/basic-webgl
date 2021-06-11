#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Plot a line. this funciton returns a float...
float plot(vec2 st) {    
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
}
float getYCoordinate(vec2 st) {
    // this function is determining the relationship between x and y coordinates for the line.
    return pow(st.x,1.0);
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;


    float y = getYCoordinate(st);

    vec3 color = vec3(y);

    // Plot a line
    float pct = plot(st);
    vec3 line_color = vec3(0.0,1.0,0.0);
    
    color = (1.0-pct)*color+pct*line_color;

    
    // this gl_FragColor colors both the gradient and the green line
	gl_FragColor = vec4(color,1.0); 
}
