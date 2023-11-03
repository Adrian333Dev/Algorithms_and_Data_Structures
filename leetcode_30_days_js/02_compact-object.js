/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

function arrHelper(arr) {
	let result = [];
  for (let val of arr) {
    if (val === null) continue;
		if (Array.isArray(val)) result.push(arrHelper(val));
		else if (typeof val === 'object') result.push(objHelper(val));
		else if (Boolean(val)) result.push(val);
	}
	return result;
}

function objHelper(obj) {
  let result = {};
  for (let key of Object.keys(obj)) {
    const val = obj[key];
    if (val === null) continue;
		if (Array.isArray(val)) result[key] = arrHelper(val);
		else if (typeof val === 'object') result[key] = objHelper(val);
		else if (Boolean(val)) result[key] = val;
	}
	return result;
}

const compactObject = (arrOrObj) => {
	if (Array.isArray(arrOrObj)) return arrHelper(arrOrObj);
	if (typeof arrOrObj === 'object') return objHelper(arrOrObj);
};

// TEST

console.log(
	compactObject({
		a: 1,
		b: null,
		c: 'hello',
		d: false,
		e: undefined,
		f: 0,
		g: 2,
	})
); // { a: 1, c: 'hello', g: 2 }
