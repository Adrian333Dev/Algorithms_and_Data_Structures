/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = (gain) => {
	let max = 0, curr = 0;
	for (let h of gain) (curr += h), (max = Math.max(max, curr));
	return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
