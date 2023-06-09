/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
	let idxs = new Map();
  for (let [i, n] of nums.entries()) {
    if (!idxs.has(n)) idxs.set(n, []);
    idxs.get(n).push(i);
  }
};

maxSlidingWindow([7, 6, 5, 4, 3, 2, 1], 3); // [7,6,5,4,3]
maxSlidingWindow([1, 2, 3, 4, 5, 6, 7], 3); // [3,4,5,6,7]
maxSlidingWindow([1, 7, 3, -1, -3, 5, 3, 6, 7], 3); // [7,7,5,5,6,7]
