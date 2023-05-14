/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = (nums) => {
	if (nums.length <= 2) return nums.length;
	let currNum = nums[0];
	let count = 1;
	let total = 1;
	for (let i = 1; i < nums.length; i++) {
		const n = nums[i];
		if (n === currNum) {
			if (count >= 2) nums[i] = '#';
			else {
				count++;
				total++;
			}
		} else {
			currNum = n;
			count = 1;
			total++;
		}
	}
	if (total === nums.length) return total;
	let hashIdx = nums.indexOf('#');
	if (!hashIdx) return total;
	let chaseLen = 1;
	for (let i = hashIdx; i < nums.length; i++) {
		let n = nums[i];
		if (n === '#') chaseLen++;
		else {
			nums[hashIdx] = n;
			nums[i] = '#';
			hashIdx++;
		}
	}
	return total;
};

console.log(
	removeDuplicates([0, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 4, 4, 4, 4, 4])
);
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
console.log(removeDuplicates([1, 1]));
console.log(removeDuplicates([1, 1, 2]));
