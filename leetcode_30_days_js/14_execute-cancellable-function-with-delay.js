/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = (fn, args, t) => {
	const timeout = setTimeout(() => fn(...args), t);
	return () => clearTimeout(timeout);
};
