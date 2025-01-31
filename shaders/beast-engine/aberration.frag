#pragma header

uniform vec2 u_offsetR;
uniform vec2 u_offsetG;
uniform vec2 u_offsetB;

void main() {
	gl_FragColor = vec4(0.0);
	gl_FragColor.ra += flixel_texture2D(bitmap, openfl_TextureCoordv - u_offsetR).ra;
	gl_FragColor.ga += flixel_texture2D(bitmap, openfl_TextureCoordv - u_offsetG).ga;
	gl_FragColor.ba += flixel_texture2D(bitmap, openfl_TextureCoordv - u_offsetB).ba;
	gl_FragColor.a /= 3.0;
}