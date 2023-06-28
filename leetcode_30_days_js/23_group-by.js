/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
	const repo = {};
	for (let n of this) {
		const key = fn(n);
		if (!repo[key]) repo[key] = [];
		repo[key].push(n);
	}
	return repo;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
