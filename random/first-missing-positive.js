/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
	let min = Infinity,
		idx = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] === nums[i]) continue;
		const requiredInt = nums[i - 1] + 1;
		if (nums[i] !== requiredInt) {
			min = Math.min(min, requiredInt);
		}
	}
	return min;
};

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
