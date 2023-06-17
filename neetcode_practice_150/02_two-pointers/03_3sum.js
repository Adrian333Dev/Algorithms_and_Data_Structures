/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
	// TODO: Try it again after some time with better solution
	nums.sort((a, b) => a - b);
	const result = [];
	const added = new Set();
	let i = 0;
	while (i < nums.length - 2) {
		let l = i + 1,
			r = nums.length - 1;
		while (l < r) {
			const sum = nums[i] + nums[l] + nums[r];
			if (sum === 0) {
				const key = `${nums[i]}-${nums[l]}-${nums[r]}`;
				if (!added.has(key)) {
					result.push([nums[i], nums[l], nums[r]]);
					added.add(key);
				}
				l++;
				r--;
			} else if (sum < 0) l++;
			else r--;
		}
		i++;
	}
	return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
