/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => { // TODO: Try again after some time
	let l = 0, r = 0, max = 0, zeros = 0, len = nums.length;
	while (zeros <= k && r < len) if (nums[r++] === 0) zeros++;
	if (zeros <= k) return len;
	max = r - 1;
  while (r < nums.length) {
    if (nums[r++] === 0) zeros++;
    while (zeros > k) if (nums[l++] === 0) zeros--;
    max = Math.max(max, r - l);
	}
	return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(
	longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); // 10
