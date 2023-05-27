const countZeroes = (arr) => {
  if (arr[0] === 0) return arr.length;
  else if (arr[arr.length - 1] === 1) return 0;
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	let midIdx = Math.floor((leftIdx + rightIdx) / 2);
	while (leftIdx <= rightIdx) {
		if (arr[midIdx] === 1) leftIdx = midIdx;
		else if (arr[midIdx] === 0) {
			if (midIdx < 0 || arr[midIdx - 1] === 1) break;
			else rightIdx = midIdx + 1;
    }
    midIdx = Math.floor((leftIdx + rightIdx) / 2);
	}

	return arr.length - midIdx;
};

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
console.log(countZeroes([1, 1, 1, 1, 1, 1, 1])); // 0
console.log(countZeroes(Array(10000000).fill(1).concat(Array(10000000).fill(0)))); // 10000000