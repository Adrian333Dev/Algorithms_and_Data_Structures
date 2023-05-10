/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = (nums) => { // ❌❌❌
	if (nums.length < 2) return nums;
	console.log(nums.toString());
	let unique = 1;
	let currNum = null;
	let currNumCount = 1;
	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if (n == currNum) {
			currNumCount++;
			if (currNumCount > 2) nums[i] = '#';
		} else {
			currNum = n;
			currNumCount = 1;
		}
	}
	return unique;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 4, 5, 5]));
