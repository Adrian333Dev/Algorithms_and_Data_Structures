/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
	let l = 0,
		r = numbers.length - 1;
	while (l < r) {
		const sum = numbers[l] + numbers[r];
		if (sum > target) r--;
		else if (sum < target) l++;
		else return [l + 1, r + 1];
	}
	return [];
};

// test
console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1)); // [1, 2]