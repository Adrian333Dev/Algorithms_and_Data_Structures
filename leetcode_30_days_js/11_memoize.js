/**
 * @param {Function} fn
 */
const memoize = (fn) => {
	const repo = new Map();
	return (...args) => {
		const key = args.join('-');
		return !repo.has(key)
			? repo.set(key, fn(...args)) && repo.get(key)
			: repo.get(key);
	};
};

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
	callCount += 1;
	return a + b;
});
console.log(memoizedFn(1, 2)); // 3
console.log(memoizedFn(1, 2)); // 3
console.log(memoizedFn(2, 1)); // 3

console.log(callCount); // 2
