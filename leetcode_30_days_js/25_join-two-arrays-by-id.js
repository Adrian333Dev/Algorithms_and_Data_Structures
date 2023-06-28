/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = (arr1, arr2) => {
	const map = {};
	for (let n of arr1) map[n.id] = n;
	for (let n of arr2)  map[n.id] = {...map[n.id], ...n};
	return Object.values(map).sort((a, b) => a.id - b.id);
};

const arr1 = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Pete' },
	{ id: 3, name: 'Mary' },
];

const arr2 = [
	{ id: 2, name: 'Pete' },
	{ id: 3, name: 'Test' },
];

console.log(join(arr1, arr2));
