    // vec3 coords = normal;
    vec3 coords = position;
	// coords.y += u_time;
	// vec3 noisePattern = vec3(noise(coords/1.5));
	// float pattern = wave(noisePattern + u_time);

	vec3 noisePattern = vec3(noise((coords + u_time) / 1.5));
	float pattern = wave(noisePattern);
	vDisplacement = pattern;

	float displacement = vDisplacement /3.0;
    
    transformed += normalize(objectNormal) * displacement;