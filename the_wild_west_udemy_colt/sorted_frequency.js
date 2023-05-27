const sortedFrequency = (arr, n) => {
	if (!arr.length || n === undefined || arr[0] > n || arr[arr.length - 1] < n)
		return -1;

	let leftIdx = 0;
	let firstIdx = leftIdx;
	let rightIdx = arr.length - 1;
	let lastIdx = rightIdx;

	let midIdx = Math.floor((leftIdx + rightIdx) / 2);

	while (leftIdx <= rightIdx) {
		if (arr[midIdx] < n) leftIdx = midIdx + 1;
		else if (arr[midIdx] > n) rightIdx = midIdx - 1;
		else if (arr[midIdx] === n) {
			if (arr[midIdx - 1] < n) {
				firstIdx = midIdx;
				break;
			} else {
				rightIdx = midIdx - 1;
			}
		}
		midIdx = Math.floor((leftIdx + rightIdx) / 2);
	}

	leftIdx = firstIdx;
	rightIdx = arr.length - 1;
	midIdx = Math.floor((leftIdx + rightIdx) / 2);
	while (leftIdx <= rightIdx) {
		if (arr[midIdx] > n) rightIdx = midIdx - 1;
		else if (arr[midIdx] === n) {
			if (arr[midIdx + 1] === n) leftIdx = midIdx + 1;
			else {
				lastIdx = midIdx;
				break;
			}
		}
		midIdx = Math.floor((leftIdx + rightIdx) / 2);
	}
	return lastIdx - firstIdx + 1;
};

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 0)); // -1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 5)); // -1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2.5)); // ! <- Not working properly
