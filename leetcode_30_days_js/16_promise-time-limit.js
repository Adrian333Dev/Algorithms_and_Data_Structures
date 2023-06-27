/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = (fn, t) => {
  return async (...args) => {
    const limit = new Promise((_, rej) => setTimeout(() => rej('Time Limit Exceeded'), t)), res = fn(...args);
    return Promise.race([limit, res]);
	};
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(90).catch(console.log); // "Time Limit Exceeded" at t=100ms
