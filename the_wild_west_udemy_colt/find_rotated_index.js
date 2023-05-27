const search = (arr, n) => {
	if (arr.length <= 2) return arr.indexOf(n);
	let left = 0;
	let right = arr.length - 1;
	let mid = Math.floor((left + right) / 2);
	let lastNum = arr[right];
	const isTargetInLeft = n > lastNum;
	const isArrRotated = arr[0] > lastNum;

	console.log(`isArrRotated: ${isArrRotated}, isTargetInLeft: ${isTargetInLeft}`);

	while (left <= right) {
		const isSelectedInLeft = arr[mid] > lastNum;
		console.log(`isSelectedInLeft: ${isSelectedInLeft}`);
		console.log(`1. arr: ${arr.slice(left, right + 1)}, mid: ${mid}, arr[mid]: ${arr[mid]}`);
		if (arr[mid] > n) {
			if (isSelectedInLeft) right = mid - 1;
			else left = mid + 1;
			console.log(`2. arr: ${arr.slice(left, right + 1)}, mid: ${mid}, arr[mid]: ${arr[mid]}`);
		} else if (arr[mid] < n) {
			if (isSelectedInLeft) left = mid + 1;
			else right = mid - 1;
			console.log(`3. arr: ${arr.slice(left, right + 1)}, mid: ${mid}, arr[mid]: ${arr[mid]}`);
		} else if (arr[mid] === n) return mid;
		mid = Math.floor((left + right) / 2);
	}

	return -1;
};

// test cases

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
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