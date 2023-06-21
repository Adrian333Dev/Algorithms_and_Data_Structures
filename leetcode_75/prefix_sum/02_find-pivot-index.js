/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
	let left = [nums[0]],
		right = [nums[nums.length - 1]];
	for (let i = 1; i < nums.length; i++)
    left.push(left[i - 1] + nums[i]), right.push(right[i - 1] + nums[nums.length - i - 1]);
  for (let i = 0; i < nums.length; i++) if ((left[i - 1] || 0) === (right[nums.length - i - 2] || 0)) return i;
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
console.log(pivotIndex([1, 2, 1])); // 1
console.log(pivotIndex([-1, -1, -1, -1, -1, 0])); // 2
