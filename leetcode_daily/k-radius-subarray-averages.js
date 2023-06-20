/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const getAverages = (nums, k) => {
	let res = [],
		sum = 0,
		l = 0,
		r = 0,
		len = k * 2 + 1,
		i = 0;
	while (r < len) sum += nums[r++];
	while (i < nums.length) {
		if (i++ >= k && i + k - 1 < nums.length) {
			res.push(Math.floor(sum / len));
			sum -= nums[l++];
			sum += nums[r++];
		} else res.push(-1);
	}
	return res;
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3)); // [-1,-1,-1,5,4,4,-1,-1,-1]
