/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = (gain) => {
	let max = 0, altitude = 0;
	for (let p of gain) {
		altitude += p;
		max = Math.max(max, altitude);
	}
	return max;
};

// test
console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1