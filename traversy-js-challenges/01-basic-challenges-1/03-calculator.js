export const calculator = (a, b, operator) => {
	switch (operator) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '*':
			return a * b;
		default:
			return 'Invalid operator';
	}
};
