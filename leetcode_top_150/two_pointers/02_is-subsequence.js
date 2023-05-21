/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  if (!s || s.length < 1) return true;
	let idxS = 0;
	for (let c of t) {
    if (s[idxS] === c) {
      idxS++;
      if (idxS === s.length) return true;
    };
  }
  return false;
};

// test cases
console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
console.log(isSubsequence('', 'ahbgdc')); // true