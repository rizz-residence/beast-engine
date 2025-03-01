#pragma header

uniform vec2 u_size;

uniform float u_fps;
uniform float u_time;

uniform float u_mix;

float hash1o3i(vec3 v) {
	v = fract(v * 0.103107);
	v += dot(v, v.zyx + 31.329583);
	return fract((v.x + v.y) * v.z);
}

void main() {
	vec4 tex = flixel_texture2D(bitmap, openfl_TextureCoordv);
	if (u_mix <= 0.0) {
		gl_FragColor = tex;
		return;
	}
	
	vec4 noise = vec4(vec3(hash1o3i(vec3(
		floor(openfl_TextureCoordv * openfl_TextureSize / u_size),
		floor(u_time * u_fps) / u_fps
	))), 1.0);
	
	gl_FragColor = mix(tex, noise, min(u_mix, 1.0));
}