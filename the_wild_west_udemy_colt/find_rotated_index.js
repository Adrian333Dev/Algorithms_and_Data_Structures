const search = (arr, n) => {
	if (arr.length <= 2) return arr.indexOf(n);
	let left = 0;
	let right = arr.length - 1;
	let mid = Math.floor((left + right) / 2);
	const last = arr[right];
	const targetRotated = n <= last;
	const isArrRotated = arr[0] > last;

	while (left <= right) {
		const val = arr[mid];
		const rotated = val <= last;
		if (val > n) {
			if (
				!isArrRotated ||
				(targetRotated && rotated) ||
				(!targetRotated && !rotated)
			)
				right = mid - 1;
			else left = mid + 1;
		} else if (val < n) {
			if (
				!isArrRotated ||
				(targetRotated && rotated) ||
				(!targetRotated && !rotated)
			)
				left = mid + 1;
			else right = mid - 1;
		} else if (val === n) return mid;
		mid = Math.floor((left + right) / 2);
	}
	return -1;
};

// test cases

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
// console.log(search([4, 5, 6, 7, 0, 1, 2], 6)); // 2
// console.log(search([0, 1, 2, 4, 5, 6, 7], 0)); // 0
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3) === -1); // -1
// console.log(search([1], 0) === -1); // -1
// console.log(search([1, 3], 1) === 0); // 0
// console.log(search([1, 3, 5], 3) === 1); // 1
// console.log(search([3, 5, 1], 0) === -1); // -1
// console.log(search([1, 3, 5], 5)); // 2
// console.log(search([1, 2, 5, 6], 1)); // 0
// console.log(search([3, 5, 1], 3)); // 0

console.log(search([3, 5, 1], 1)); // 2
// console.log(search([5, 1, 3], 3)); // 2
