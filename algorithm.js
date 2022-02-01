function WorleyNoise(width, height, points, inverted = false) {
	this.width = width;
	this.height = height;
	this.points = points;
	this.inverted = inverted;

	this.getValue = function(x = 0, y = 0){
		var distance = -1;
		var secondDistance = -1;

		for (var i = 0; i < points.length; i++) {
			var distanceFromPoint = distanceBetweenPoints([x, y], points[i]);

				if (distance < 0 || distanceFromPoint < distance) {
					secondDistance = distance;
					distance = distanceFromPoint;
				} else if (secondDistance < 0 || distanceFromPoint < secondDistance) {
					secondDistance = distanceFromPoint;
				}
			}

			if (inverted) {
				distance /= (secondDistance - 2);
			} else {
				distance = (secondDistance + 4) / distance;
			}

			return distance;
	}
}

function distanceBetweenPoints(a, b) {
	return Math.hypot(a[0] - b[0], a[1] - b[1]);
}
