// function maxProfit(prices: number[]): number {
//   let profit = 0;
//   for (let i = 1; i < prices.length; i++)
//     if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
//   return profit;
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([1, 2, 3, 4, 5]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
// console.log(maxProfit([2, 1, 2, 0, 1]));

function searchInsert(nums: number[], target: number): number {
  let [l, r, m] = [0, nums.length - 1, 0];
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (nums[m] < target) l = m + 1;
    else if (nums[m] > target) r = m - 1;
    else if (nums[m] === target) return m;
  }
  return l;
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
