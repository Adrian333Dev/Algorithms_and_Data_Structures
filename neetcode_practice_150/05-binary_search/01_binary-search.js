/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
	if (!nums.length) return -1;
	let mid = Math.floor(nums.length / 2);
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		if (nums[mid] < target) left = mid + 1;
		else if (nums[mid] > target) right = mid - 1;
		else if (nums[mid] === target) return mid;
		else return -1;
		mid = Math.floor((left + right) / 2);
	}

	return -1;
};

// test cases
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(search([5], 5)); // 0
console.log(search([5], -5)); // -1
