/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
	if (height.length <= 1) return 0;
	let l = 0,
		r = height.length - 1;
	while (height[l] <= 0) l++;
	while (height[r] <= 0) r--;
	let max = Math.min(height[l], height[r]) * (r - l);
	while (l < r) {
		if (height[l] < height[r]) l++;
		else r--;
		max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
	}
	return max;
};

// test
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
