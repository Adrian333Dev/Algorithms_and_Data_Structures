/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
	const productOfPrev = [nums[0]];
	const productOfNext = [nums[nums.length - 1]];
	for (let i = 1; i < nums.length; i++) {
		productOfPrev.push(productOfPrev[i - 1] * nums[i]);
		productOfNext.push(productOfNext[i - 1] * nums[nums.length - 1 - i]);
	}
	for (let i = 0; i < nums.length; i++)
		nums[i] =
			(i === 0 ? 1 : productOfPrev[i - 1]) *
			(i === nums.length - 1 ? 1 : productOfNext[nums.length - 2 - i]);

	return nums;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
// console.log(productExceptSelf([1, 2])); // [2,1]
