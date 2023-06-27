/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
	let curr = init;
	return {
		increment: () => ++curr,
		decrement: () => --curr,
		reset: () => (curr = init),
	};
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.increment()); // 8
