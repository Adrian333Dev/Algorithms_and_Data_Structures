/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (l < r && !isAlphaNumeric(s.charCodeAt(l))) l++;
    while (l < r && !isAlphaNumeric(s.charCodeAt(r))) r--;
    if (l < r && !isSameChar(s[l++], s[r--])) return false;
  }
  return true;
};

const isAlphaNumeric = (code) => {
	if (code >= 48 && code <= 57) return true; // numbers
	if (code >= 65 && code <= 90) return true; // uppercase
	if (code >= 97 && code <= 122) return true; // lowercase
	return false;
};

const isSameChar = (a, b) => a.toLowerCase() === b.toLowerCase();

// test

console.log(isPalindrome('A man, a plan, a canal: Panama'));