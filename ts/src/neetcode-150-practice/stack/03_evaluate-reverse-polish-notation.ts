const evalRPN = (tokens: string[]): number => {
  const stack = [];
  const operators = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => Math.trunc(a / b),
  };

  for (const token of tokens)
    token in operators
      ? stack.push(operators[token](...[stack.pop(), stack.pop()].reverse()))
      : stack.push(Number(token));

  return stack.pop();
};

let tokens = ['4', '-2', '/', '2', '-3', '-', '-'];
console.log(evalRPN(tokens)); // -7