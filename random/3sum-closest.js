/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
	if (nums.length <= 3) return nums.reduce((a, b) => a + b, 0);
	let closest = nums[0] + nums[1] + nums[2];
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 1; i++) {
		let l = i + 1,
			r = nums.length - 1;
		while (l < r) {
			const sum = nums[i] + nums[l] + nums[r];
			closest =
				Math.abs(sum - target) < Math.abs(closest - target) ? sum : closest;
			if (sum < target) l++;
			else if (sum > target) r--;
			else return sum;
		}
	}
	return closest;
};

// test
// console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
// console.log(threeSumClosest([0, 0, 0], 1)); // 0
console.log(threeSumClosest([1, 1, 1, 1], 4)); // 0
