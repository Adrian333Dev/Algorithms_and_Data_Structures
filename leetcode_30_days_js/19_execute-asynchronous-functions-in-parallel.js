/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = async (fns) => {
	let results = [], count = 0;
	return new Promise((res, rej) => {
		for (let i = 0; i < fns.length; i++)
			fns[i]()
				.then((val) => results[i] = val)
				.catch((err) => rej(err))
				.finally(() => count === fns.length ? res(results) : count++);
	});
};

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]
