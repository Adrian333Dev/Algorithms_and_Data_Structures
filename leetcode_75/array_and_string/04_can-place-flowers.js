/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (arr, n) => {
	let count = 0, i = 0;
	while (i < arr.length) {
		if (
			arr[i] === 0 &&
			(arr[i - 1] === 0 || i === 0) &&
			(arr[i + 1] === 0 || i === arr.length - 1)
		) {
			count++;
			i += 2;
		} else i++;
	}
	return count >= n;
};

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // true
