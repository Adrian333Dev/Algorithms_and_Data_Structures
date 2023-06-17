/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
	if (nums.length < 2) return nums.length ? nums[0] : 0;
	let maxSum = nums.reduce((acc, n) => (acc += n), 0);
	let l = 0,
		r = nums.length - 1;
	while (l < r) {}
};
