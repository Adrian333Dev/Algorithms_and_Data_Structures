/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
	let i = 0, j = 0, sLen = s.length, tLen = t.length;
	while (i < sLen && j < tLen) if (s[i] === t[j++]) i++;
	return i === sLen;
};

console.log(isSubsequence('abc', 'ahbgdc') === true);
console.log(isSubsequence('axc', 'ahbgdc') === false);
