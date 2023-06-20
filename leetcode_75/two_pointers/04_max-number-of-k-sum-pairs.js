/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
	let repo = {}, count = 0;
	for (let n of nums) repo[n] = (repo[n] || 0) + 1;
  for (let n of nums) {
    const remain = k - n, same = remain === n;
    if (repo[remain] > 0 && repo[n] > 0) {
      if (same && repo[n] < 2) continue;
      repo[n]--, repo[remain]--;
      count++;
    }
	}
	return count;
};

// console.log(maxOperations([1, 2, 3, 4], 5)); // 2
// console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
console.log(maxOperations([2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2], 3)); // 4
