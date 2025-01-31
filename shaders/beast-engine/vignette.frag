#pragma header

uniform float u_radiusMin;
uniform float u_radiusMax;
uniform float u_curve;

uniform bool u_circular;
uniform bool u_smooth;

uniform float u_mix;

float lstep(float edge0, float edge1, float x) {
	return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {
	gl_FragColor = flixel_texture2D(bitmap, openfl_TextureCoordv);
	if (u_mix == 0.0) {
		return;
	}
	
	vec2 coord = openfl_TextureCoordv - 0.5;
	if (u_circular) {
		coord.y *= u_resolution.y / u_resolution.x;
	}
	
	float dist = length(coord * 2.0);
	float vignette = pow(u_smooth ? smoothstep(u_radiusMax, u_radiusMin, dist) : lstep(u_radiusMax, u_radiusMin, dist), u_curve);
	
	gl_FragColor = mix(gl_FragColor, vec4(vec3(step(0.0, u_mix) * vignette), 1.0), u_mix);
}