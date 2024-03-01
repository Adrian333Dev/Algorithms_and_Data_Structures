/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const len = nums.length,
    fowardProd = Array(len).fill(1),
    backwordProd = Array(len).fill(1),
    res = [];

  (fowardProd[0] = nums[0]), (backwordProd[len - 1] = nums[len - 1]);
  for (let i = 1; i < len; i++) {
    fowardProd[i] = fowardProd[i - 1] * nums[i];
    backwordProd[len - i - 1] = backwordProd[len - i] * nums[len - i - 1];
  }

  for (let i = 0; i < len; i++) {
    const prev = i > 0 ? fowardProd[i - 1] : 1;
    const next = i < len - 1 ? backwordProd[i + 1] : 1;
    res.push(prev * next);
  }

  return res;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([1, 2, 3, 4, 5])); // [120,60,40,30,24]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6])); // [720,360,240,180,144,120]
