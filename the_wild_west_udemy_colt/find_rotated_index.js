const search = (arr, n) => {
	if (arr.length <= 2) return arr.indexOf(n);
	let left = 0;
	let right = arr.length - 1;
	let mid = Math.floor((left + right) / 2);
	const last = arr[right];
	const targetRotated = n > last;
	const isArrRotated = arr[0] > last;

	// [4, 5, 6, 7, 0, 1, 2] 0
	// [0, 1, 2, 4, 5, 6, 7] 0

	while (left <= right) {
		const val = arr[mid];
		const rotated = mid > last;
		console.log(
			`16: arr = [${arr.slice(left, right + 1)}], mid = ${mid}, val = ${val}`
		);
		if (val > n) {
			if (!isArrRotated || (!rotated && !targetRotated)) right = mid - 1;
			else left = mid + 1;
			console.log(`19: arr = [${arr.slice(left, right + 1)}]`);
		} else if (val < n) {
			if (!isArrRotated || (!rotated && !targetRotated)) left = mid + 1;
			else right = mid - 1;
			console.log(`23: arr = [${arr.slice(left, right + 1)}]`);
		} else if (val === n) return mid;
		mid = Math.floor((left + right) / 2);
	}
	return -1;
};

// test cases

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
// console.log(search([0, 1, 2, 4, 5, 6, 7], 0)); // 0
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3) === -1); // -1
// console.log(search([1], 0) === -1); // -1
// console.log(search([1, 3], 1) === 0); // 0
// console.log(search([1, 3, 5], 3) === 1); // 1
// console.log(search([3, 5, 1], 0) === -1); // -1
// console.log(search([1, 3, 5], 5)); // 2
// console.log(search([3, 5, 1, 4], 1)); // 2
// console.log(search([1, 2, 5, 6], 1)); // 0

// console.log(search([5, 1, 3], 3)); // 2
// console.log(search([3, 5, 1], 3)); // 0
