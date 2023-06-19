/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
	let i = 0,
		l = 0,
		r = 0,
		len = chars.length;
	while (r < len) {
		let c = chars[r];
		if (chars[r + 1] !== c || r === len - 1) {
			const count = (r - l + 1).toString();
			l = r + 1;
			chars[i++] = c;
			if (count !== '1')
				for (let k = 0; k < count.length; k++) chars[i++] = count[k];
		}
		r++;
	}
	return i;
};

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])); // 6
console.log(compress(['a'])); // 1
console.log(compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])); // 4
