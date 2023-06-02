/**
 * @param {Function} fn
 */
const memoize = (fn) => {
	const repo = {};
	return function (...args) {
		const key = args.join('-');
		if (key in repo) return repo[key];
		repo[key] = fn(...args);
		return repo[key];
	};
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
