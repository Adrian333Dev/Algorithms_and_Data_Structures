/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
	const charsMap = new Map(),
		groups = [];
	for (let [strIdx, str] of strs.entries()) {
		for (let i = 0; i < str.length; i++) {
			const char = str[i];
			if (!charsMap.has(char)) charsMap.set(char, new Set());
			charsMap.get(char).add(strIdx);
		}
	}

	const skipList = new Set();
	let i = 0;
	while (i < strs.length) {
		if (skipList.has(i)) {
			i++;
			continue;
		}
		const str = strs[i],
			group = new Set();
		for (let i = 0; i < str.length; i++) {
			const char1 = str[i];
			for (let j = i + 1; j < str.length; j++) {
				const char2 = str[j],
					set1 = charsMap.get(char1),
					set2 = charsMap.get(char2);
				for (let k of set1) set2.has(k) ? group.add(k) : group.delete(k);
			}
		}
		groups.push(group.values());
		i++;
	}

	return groups;
};

// test cases
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// console.log(groupAnagrams(['ac', 'd']));

/*
arr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
set = {'aet'}
charsMAP1 = {e,a,t,n,b}
charsMAP2 = {
	e:{arr[0],arr[1],arr[3]}, 
	a:{arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]},
	t:{arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]},
	n:{arr[2],arr[4]},
	b:{arr[5]}
}

1. Loop over each str in the list
2. Loop over each char in the str
	1. check char againts all the other chars in the word

pending:{1,2,3}

*/
