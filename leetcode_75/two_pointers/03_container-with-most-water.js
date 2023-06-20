/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
	let l = 0,
		len = height.length,
		r = len - 1,
    max = Math.min(height[l], height[r]) * (r - l);
  while (l < r) {
    if (height[l] < height[r]) l++;
    else r--;
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 2, 1])); // 2
