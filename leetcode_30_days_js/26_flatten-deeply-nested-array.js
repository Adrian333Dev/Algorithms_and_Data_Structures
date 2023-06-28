/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
const flat = (arr, maxDepth = 0) => {
	const res = [];
	const flatten = (arr, depth = 0) => {
		for (let n of arr) Array.isArray(n) && depth < maxDepth ? flatten(n, depth + 1) : res.push(n);
	};
	flatten(arr);
	return res;
};

// test
const arr = [1, [2], [[3], 4], 5];
console.log(flat(arr)); // [1, 2, 3, 4, 5]
