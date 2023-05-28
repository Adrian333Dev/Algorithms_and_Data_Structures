/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
	const counts = [0, 0, 0];
	for (let n of nums) counts[n]++;
	let idx = 0;
  for (let j = 0; j < counts.length; j++) while (counts[j]--) nums[idx++] = j;
  return nums;
};

// Tests
// console.log(sortColors([2, 0, 2, 1, 1, 0].toString() === [0, 0, 1, 1, 2, 2].toString()));
// console.log(sortColors([2, 0, 1].toString() === [0, 1, 2].toString()));
// console.log(sortColors([0].toString() === [0].toString()));

