/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
	let lastIdx = s.length - 1;
	while (lastIdx >= 0 && !isLetter(s.charAt(lastIdx))) lastIdx--;
	if (!lastIdx) isLetter(s.charAt(lastIdx)) ? 1 : 0;
  let firstIdx = lastIdx;
  while (firstIdx >= 0 && isLetter(s.charAt(firstIdx - 1))) firstIdx--;
  return lastIdx - firstIdx + 1;
};

const isLetter = (c) => {
	const code = c.charCodeAt(0);
	return (code >= 97 && code <= 122) || (code >= 65 && code <= 90);
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('a'));