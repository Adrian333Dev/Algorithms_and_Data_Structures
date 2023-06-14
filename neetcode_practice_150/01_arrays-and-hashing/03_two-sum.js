/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const repo = {};
	for (let i = 0; i < nums.length; i++) {
		const remain = target - nums[i]; 
    if (remain in repo && repo[remain] !== i) return [i, repo[remain]];
    repo[nums[i]] = i;
	}
	return [];
};

// test case
console.log(twoSum([2, 7, 11, 15], 9)); // true
console.log(twoSum([3, 2, 4], 6)); // true
console.log(twoSum([3, 3], 6)); // true
console.log(twoSum([3, 3], 7)); // false