/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
	let l = [], r = [], res = [];
	for (let i = 0; i < nums.length; i++) {
		l.push((l[i - 1] ?? 1) * nums[i]);
		r.push((r[i - 1] ?? 1) * nums[nums.length - 1 - i]);
  }
	for (let i = 0; i < nums.length; i++)
    res.push((l[i - 1] ?? 1) * (r[nums.length - i - 2] ?? 1));
  return res;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]