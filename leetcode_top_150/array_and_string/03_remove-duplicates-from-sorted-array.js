/**
 * @param {number[]} nums
 * @return {number}
 */

let removeDuplicates = function (nums) {
	if (nums.length < 2) return nums;
	let currIdx = 0;
	let unique = 1;
	for (let i = 1; i < nums.length; i++) {
		const n = nums[i];
		if (n !== nums[currIdx]) {
			currIdx++;
			nums[currIdx] = n;
			unique++;
		}
	}
	return unique;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 4, 5, 5]));
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
