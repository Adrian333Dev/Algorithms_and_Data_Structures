// All Permutations of a String

// Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.

// Example:
// stringPermutations('one'); // should return  [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one' ]

const stringPermutations = (str) => {
	let results = [];
	let letters = str.split('');
	let recurse = (curr, remaining) => {
		if (curr.length === str.length) {
			results.push(curr);
			return;
		}
		for (let i = 0; i < remaining.length; i++) {
			recurse(
				curr + remaining[i],
				remaining.slice(0, i) + remaining.slice(i + 1)
			);
		}
	};
	recurse('', letters);
	return results;
};

// In Pyton 3
/*
def stringPermutations(string):
		results = []
		letters = list(string)
		def recurse(curr, remaining):
				if len(curr) == len(string):
						results.append(curr)
						return
				for i in range(len(remaining)):
						recurse(curr + remaining[i], remaining[:i] + remaining[i+1:])
		recurse('', letters)
		return results
*/
