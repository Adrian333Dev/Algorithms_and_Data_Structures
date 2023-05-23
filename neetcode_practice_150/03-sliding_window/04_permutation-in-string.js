/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  const s1Map = new Map();
  for (let i = 0; i < s1.length; i++) {
    s1Map.set(s1[i], s1Map.get(s1[i]) + 1 || 1);
  }

	return false;
};

// test code
console.log(checkInclusion('ab', 'eidbaooo')); // true
console.log(checkInclusion('ab', 'eidboaoo')); // false
console.log(checkInclusion('adc', 'dcda')); // true
console.log(checkInclusion('hello', 'ooolleoooleh')); // false
