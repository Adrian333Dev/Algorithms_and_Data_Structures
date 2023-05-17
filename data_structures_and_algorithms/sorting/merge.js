const merge = (arr1, arr2) => {
	let left = 0;
	let right = 0;
	let result = [];

	while (true) {
		if (left === arr1.length) {
			for (let i = right; i < arr2.length; i++) result.push(arr2[i]);
			return result;
		} else if (right === arr2.length) {
			for (let i = left; i < arr1.length; i++) result.push(arr1[i]);
			return result;
		}
		if (arr1[left] <= arr2[right]) result.push(arr1[left++]);
		else result.push(arr2[right++]);
	}
};

// test merge
console.log(merge([1, 10, 50], [2, 14, 99, 100]));

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
};

let arr = [5, 4, 3, 2, 1];
mergeSort(arr);
