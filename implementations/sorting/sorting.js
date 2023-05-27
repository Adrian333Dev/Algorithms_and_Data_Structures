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

const mergeSort = (arr) => {};

const quickSort = (arr) => {};

const bucketSort = (arr) => {};

// ! Helper functions

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

// ! Main function

const sort = (arr) => {
	insertionSort(arr);
	return arr;
};

// ! Test function

const test = () => { 
  const arr1 = [5, 2, 3, 1];
  const arr2 = [5, 1, 1, 2, 0, 0];
  console.log(sort(arr1).toString() === [1, 2, 3, 5].toString());
  console.log(sort(arr2).toString() === [0, 0, 1, 1, 2, 5].toString());
};

test();