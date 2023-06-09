/**
 * @param {number} millis
 */
const sleep = async (millis) =>
	await new Promise((res) => setTimeout(res, millis));

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100