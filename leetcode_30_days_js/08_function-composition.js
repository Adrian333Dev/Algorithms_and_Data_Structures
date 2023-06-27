/**
 * @param {Function[]} fns
 * @return {Function}
 */
const compose = (fns) => {
	const exec = (x, i = fns.length - 1) => i < 0 ? x : exec(fns[i](x), i - 1);
	return exec;
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9

const fn2 = compose([x => x + 1, x => 2 * x, x => x / 2]);
console.log(fn2(4)); // 5