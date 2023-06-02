/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
const promisePool = async (functions, n) => {};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
