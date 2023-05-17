const sort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		while (j >= 0 && arr[j + 1] < arr[j]) {
			let temp = arr[j + 1];
			arr[j + 1] = arr[j];
			arr[j] = temp;
			j--;
		}
	}
	return arr;
};

// example
const arr = [1, 5, 3, 2, 4];
console.log(sort(arr)); // [1, 2, 3, 4, 5]
