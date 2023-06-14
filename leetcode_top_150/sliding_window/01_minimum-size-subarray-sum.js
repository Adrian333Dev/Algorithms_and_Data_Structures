/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
	if (!target || !nums) return 0;
	let left = 0,
		right = 0;
	let sum = 0;
	while (right < nums.length || sum < target) sum += nums[right++];
	let len = right - left + 1;
	while (right < nums.length) {}
	return len;
};
