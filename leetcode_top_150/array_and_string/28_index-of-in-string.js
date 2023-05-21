/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle === "") return 0;
	for (let i = 0; i < haystack.length; i++) {
		if (
			haystack[i] === needle[0] &&
			haystack[i + needle.length - 1] === needle[needle.length - 1]
		) {
			if (haystack.slice(i, i + needle.length) === needle) return i;
		}
	}
  return -1;
};

// test case
console.log(strStr("hello", "ll")); // 2
console.log(strStr("aaaaa", "bba")); // -1
console.log(strStr("", "")); // 0
console.log(strStr("a", "a")); // 0
console.log(strStr("mississippi", "issip")); // 4