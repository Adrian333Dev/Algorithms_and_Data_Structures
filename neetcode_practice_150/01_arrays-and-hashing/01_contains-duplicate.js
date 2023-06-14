/**
 * @param {number[]} nums
 * @return {boolean}
 */
// const containsDuplicate = (nums) => {
//   const repo = new Set();
//   for (let n of nums) {
//     if (repo.has(n)) return true;
//     repo.add(n);
//   }
//   return false;
// };

const containsDuplicate = (nums) => {
	return new Set(nums).size !== nums.length;
};

// test
console.log(containsDuplicate([1, 2, 3, 1])); // true
