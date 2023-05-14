/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let rotate = (nums, k) => {
	if (nums.length < 2) return nums;
	nums.reverse();
	if (k > nums.length) k = k % nums.length;
	let left = 0;
	let right = k - 1;
	while (left < right) {
		swap(nums, left, right);
		left++;
		right--;
	}
	left = k;
	right = nums.length - 1;
	while (left < right) {
		swap(nums, left, right);
		left++;
		right--;
	}
	return nums;
};

const swap = (nums, i, j) => {
	const temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
console.log(rotate([1, 2], 3)); // [2,1]
