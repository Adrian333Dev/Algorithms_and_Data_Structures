/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => {
	let filtered = [];
	for (let i = 0; i < arr.length; i++) fn(arr[i], i) && filtered.push(arr[i]);
	return filtered;
};
