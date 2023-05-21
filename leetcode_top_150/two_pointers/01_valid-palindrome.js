/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
	if (!s || s.length < 2) return true;
	s = s.toLowerCase();
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (!isAlphaNumeric(s[left])) {
			left++;
			continue;
		}
		if (!isAlphaNumeric(s[right])) {
			right--;
			continue;
		}
		if (s[left] != s[right]) return false;
		else {
			left++;
			right--;
		}
	}

	return true;
};

const isAlphaNumeric = (ch) => {
	const co = ch.charCodeAt(0);
	if (!(co > 47 && co < 58) && !(co > 96 && co < 123)) return false;
	return true;
};

// test cases
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car'));
