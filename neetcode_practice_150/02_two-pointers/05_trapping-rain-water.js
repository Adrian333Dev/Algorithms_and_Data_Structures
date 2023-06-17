/**
 * @param {number[]} height
 * @return {number}
 */

// TODO: try to solve this problem again after some time
const trap = (height) => {
	// ! O(n) time, O(n) space
	let leftMax = 0,
		rightMax = 0,
		left = [],
		right = [],
		total = 0;

	for (let i = 0; i < height.length; i++) {
		leftMax = Math.max(leftMax, height[i]);
		rightMax = Math.max(rightMax, height[height.length - 1 - i]);
		left[i] = leftMax;
		right[height.length - 1 - i] = rightMax;
	}

	for (let i = 0; i < height.length; i++)
		total += Math.max(0, Math.min(left[i], right[i]) - height[i]);
	return total;
};

// test
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
