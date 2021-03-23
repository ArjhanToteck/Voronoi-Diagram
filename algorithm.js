function worleyNoise(width, height, points, inverted = false) {
	var noise = [];

	for (var x = 0; x < width; x++) {
		noise.push([]);
		for (var y = 0; y < width; y++) {

			var distance = -1;
			var secondDistance = -1;

			for (var i = 0; i < points.length; i++) {
				if (distance < 0 || vector2Distance([x, y], points[i]) < distance) {
					secondDistance = distance;
					distance = vector2Distance([x, y], points[i]);
				} else if (secondDistance < 0 || vector2Distance([x, y], points[i]) < secondDistance) {
					secondDistance = vector2Distance([x, y], points[i]);
				}
			}

			if (inverted) {
				distance /= (secondDistance - 2);
			} else {
				distance = (secondDistance + 4) / distance;
			}

			noise[x].push(distance);
		}
	}

	return noise;
}

function vector2Distance(a, b) {
	return Math.hypot(a[0] - b[0], a[1] - b[1]);
}
