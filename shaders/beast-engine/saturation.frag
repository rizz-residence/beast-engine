#pragma header

uniform float u_saturation;

void main() {
	gl_FragColor = flixel_texture2D(bitmap, openfl_TextureCoordv);
	if (u_saturation == 1.0) {
		return;
	}
	
	gl_FragColor.rgb = clamp(mix(vec3(gl_FragColor.r + gl_FragColor.g + gl_FragColor.b) / 3.0, gl_FragColor.rgb, u_saturation), 0.0, 1.0);
}