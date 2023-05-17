const quickSort = (arr, start = 0, end = arr.length - 1) => {
	if (end - start + 1 <= 1) return arr;
	const pivot = arr[end];
	let swapIdx = start;

	for (let i = start; i < end; i++) {
		if (arr[i] < pivot) {
			swap(arr, i, swapIdx);
			swapIdx++;
		}
	}
	swap(arr, swapIdx, end);

	quickSort(arr, start, swapIdx - 1);
	quickSort(arr, swapIdx + 1, end);
};

const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// test cases

const arr1 = [6, 2, 4, 1, 3];
quickSort(arr1);
console.log(arr1); // [1, 2, 3, 4, 6]
