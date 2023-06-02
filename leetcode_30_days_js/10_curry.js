/**
 * @param {Function} fn
 * @return {Function}
 */
const curry = (fn) => {
	return function curried(...args) {
		if (args.length >= fn.length) return fn(...args);
		return (...args2) => curried(...args, ...args2);
	};
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
