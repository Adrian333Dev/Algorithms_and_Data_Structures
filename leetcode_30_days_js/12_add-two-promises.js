/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async (p1, p2) =>
	Promise.all([p1, p2]).then(([v1, v2]) => v1 + v2);

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
