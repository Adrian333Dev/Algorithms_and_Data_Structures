/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
	const sRepo = new Map(), tRepo = new Map();
  for (let i = 0; i < t.length; i++) tRepo.set(t[i], (tRepo.get(t[i]) || 0) + 1);
	// for (let i = 0; i < s.length; i++) sRepo.set(s[i], (sRepo.get(s[i]) || 0) + 1);
  console.log(sRepo, tRepo);
};

minWindow("ADOBECODEBANC", "ABC"); // "BANC"
