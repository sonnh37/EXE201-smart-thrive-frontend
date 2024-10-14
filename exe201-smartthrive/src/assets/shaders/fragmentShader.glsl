uniform float u_time;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying float vDisplacement;
void main() {
	
	gl_FragColor = vec4(vec3(vDisplacement),1.0 );
}