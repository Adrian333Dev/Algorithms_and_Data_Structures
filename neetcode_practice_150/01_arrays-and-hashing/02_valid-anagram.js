/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;
	const repo = {};
	for (let i = 0; i < s.length; i++) {
		repo[s[i]] = (repo[s[i]] || 0) + 1;
		repo[t[i]] = (repo[t[i]] || 0) - 1;
	}
	return Object.values(repo).every((count) => count === 0);
};

// test case
console.log(isAnagram('anagram', 'nagaram')); // true
