/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
	const repo = {};
	for (let str of strs) {
		const hash = hashStr(str);
		console.log(hash);
		if (repo[hash]) repo[hash].push(str);
		else repo[hash] = [str];
	}
	return Object.values(repo);
};

const generateHash = (arr) => {
	let hash = '';
	for (let i = 0; i < arr.length; i++) hash += arr[i] + '#';
	return hash;
};

const hashStr = (str) => {
	const hashArr = Array(26).fill(0);
	for (let i = 0; i < str.length; i++) hashArr[str.charCodeAt(i) - 97]++;
	return generateHash(hashArr);
};

// test cases
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['ac', 'd']));
