// ! Sorting algorithms

const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		while (j >= 0 && arr[j] > arr[j + 1]) {
			swap(arr, j, j + 1);
			j--;
		}
	}
};

const mergeSort = (arr, start = 0, end = arr.length - 1) => {
	if (end - start + 1 <= 1) return arr;
	const mid = Math.floor((start + end) / 2);
	if (start < end) {
		mergeSort(arr, start, mid);
		mergeSort(arr, mid + 1, end);
		merge(arr, start, mid, end);
	}
	return arr;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
	if (start < end) {
		const pivot = partition(arr, start, end);
		quickSort(arr, start, pivot - 1);
		quickSort(arr, pivot + 1, end);
	}
	return arr;
};

const bucketSort = (arr) => {
	const count = new Array(Math.max(...arr) + 1).fill(0);
	for (let i = 0; i < arr.length; i++) count[arr[i]]++;
	let k = 0;
	for (let i = 0; i < count.length; i++) while (count[i]--) arr[k++] = i;
	return arr;
};

// ! Helper functions

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const merge = (arr, start, mid, end) => {
	const left = arr.slice(start, mid + 1);
	const right = arr.slice(mid + 1, end + 1);
	let i = 0,
		j = 0,
		k = start;
	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) arr[k++] = left[i++];
		else arr[k++] = right[j++];
	}
	while (i < left.length) arr[k++] = left[i++];
	while (j < right.length) arr[k++] = right[j++];
};

const partition = (arr, start, end) => {
	if (end - start + 1 <= 1) return start;
	const pivot = Math.floor(Math.random() * (end - start + 1)) + start;
	swap(arr, pivot, end);
	let i = start - 1;
	for (let j = start; j < end; j++) {
		if (arr[j] <= arr[end]) swap(arr, ++i, j);
	}
	swap(arr, ++i, end);
	return i;
};

// ! Main function

const sort = (arr) => {
	// insertionSort(arr);
	// return mergeSort(arr);
	// return quickSort(arr);
	return bucketSort(arr);
};

// ! Test function

const test = () => {
	const arr1 = [5, 2, 3, 1];
	const arr2 = [5, 1, 1, 2, 0, 0];
	const arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
	const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	console.log(sort(arr1).toString() === [1, 2, 3, 5].toString());
	console.log(sort(arr2).toString() === [0, 0, 1, 1, 2, 5].toString());
	console.log(sort(arr3).toString() === [1, 2, 3, 4, 5, 6, 7, 8, 9].toString());
	console.log(sort(arr4).toString() === [1, 2, 3, 4, 5, 6, 7, 8, 9].toString());
};

test();
