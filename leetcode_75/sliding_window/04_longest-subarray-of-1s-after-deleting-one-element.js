/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = (nums) => {
	let l = 0, r = 0, max = 0, zeroExist = false;
	while (r < nums.length) {
		if (nums[r] === 1) r++;
    else {
		}
  }
  max = Math.max(r - l - 1, max);
	return max;
};

const test1 = longestSubarray([1, 1, 0, 1]);
const test2 = longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]);
const test3 = longestSubarray([1, 1, 1]);
const test4 = longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1]);
const test5 = longestSubarray([0, 0, 1, 1]);
const test6 = longestSubarray([0, 0, 0]);
const test7 = longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]);
const test8 = longestSubarray([1, 1, 1, 0, 1, 1, 1, 0, 1]);
const test9 = longestSubarray([1, 1, 1, 0, 1, 1, 1, 0, 1, 1]);
const test10 = longestSubarray([1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0]);

const correctResults = [3, 5, 2, 4, 2, 0, 5, 5, 6, 5];
const tests = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10];

tests.forEach((test, idx) => { 
  if (test === correctResults[idx]) console.log(`Test ${idx + 1} --- PASS`);
  else console.log(`Test ${idx + 1} --- FAIL: Expected ${correctResults[idx]}, got ${test}`);
});