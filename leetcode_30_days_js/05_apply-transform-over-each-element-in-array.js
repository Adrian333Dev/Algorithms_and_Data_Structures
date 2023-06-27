/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
	const res = [];
	for (let i = 0; i < arr.length; i++) res.push(fn(arr[i], i));
	return res;
};

const test = map([1, 2, 3, 4, 5], (v) => v * 2);
console.log(test);
