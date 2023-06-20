/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
	let i = 0, z = 0, len = nums.length;
	while (i < nums.length) {
		while (nums[i] === 0 && i < len) i++;
		while (nums[z] !== 0 && z < len) z++;
		if (i > z && i < len) [nums[i], nums[z]] = [nums[z], nums[i]];
		i++;
	}
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums.join(",") === "1,3,12,0,0" ? true : nums.join(","));
nums = [0, 0, 1];
moveZeroes(nums);
console.log(nums.join(",") === "1,0,0" ? true : nums.join(","));
nums = [0];
moveZeroes(nums);
console.log(nums.join(",") === "0" ? true : nums.join(","));