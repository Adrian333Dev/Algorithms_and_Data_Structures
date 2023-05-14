/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
	let left = 0;
	let right = height.length - 1;
	let max = 0;

	while (left < right) {
		max = Math.max(Math.min(height[left], height[right]) * (right - left), max);
		if (height[left] <= height[right]) left++;
		else right--;
	}

	return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 2, 1])); // 2
console.log(maxArea([1, 2, 4, 3])); // 4

console.log(maxArea([1, 3, 2, 5, 25, 24, 5])); // 24
