/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
	const is_prime = new Array(n).fill(true);
	is_prime[0] = is_prime[1] = false;
	for (let i = 2; i <= Math.sqrt(n); i++)
		for (let j = i + i; j <= n; j += i) is_prime[j] = false;
	return is_prime.reduce((c, n) => (n ? c + 1 : c), 0);
};
console.log(countPrimes(10)); // 4
console.log(countPrimes(0)); // 0
console.log(countPrimes(1)); // 0
console.log(countPrimes(2)); // 0
console.log(countPrimes(3)); // 1
console.log(countPrimes(4)); // 2
