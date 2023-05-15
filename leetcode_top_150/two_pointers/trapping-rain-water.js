/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let left = height.findIndex((h) => h > 0); // 1
	let right = left + 1;
	let sum = 0;

	while (right < height.length) {
		if (height[right] > 0) {
			if (height[right - 1] === 0) {
        sum += Math.min(height[left], height[right]) * (right - left);
			}
		}
	}
};
