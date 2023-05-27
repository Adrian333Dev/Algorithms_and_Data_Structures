/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
	let arr = [];
	for (let i = s.length - 1; i >= 0; i--) {
		let c = s.charAt(i);
		if (c !== ' ') arr.push(c);
		else if (arr[arr.length - 1] !== ' ' && arr.length) arr.push(' ');
	}
	if (arr[arr.length - 1] === ' ') arr.pop();
	if (arr.length < 2) return arr.join('');

	let start = 0;
	let idx = arr.indexOf(' ');
	let isLast = idx === -1;
	let end = isLast ? arr.length - 1 : idx - 1;

	while (isLast || idx !== -1) {
		reverse(arr, start, end);
		start = idx + 1;
		idx = arr.indexOf(' ', idx + 1);
		end = idx - 1;
		if (idx === -1) {
			if (isLast) return arr.join('');
			else {
				idx = arr.length - 1;
				end = idx;
				isLast = true;
			}
		}
	}

	return arr.join('');
};

const reverse = (arr, start, end) => {
	while (start < end) {
		[arr[start], arr[end]] = [arr[end], arr[start]];
		start++;
		end--;
	}
};

console.log(reverseWords('the sky is blue') === 'blue is sky the');
console.log(reverseWords('  hello world  ') === 'world hello');
console.log(reverseWords('a good   example') === 'example good a');
console.log(reverseWords('EPY2giL') === 'EPY2giL');
