/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const p = {
      ')': '(',
      ']': '[',
      '}': '{',
    },
    stack = [];

  for (let c of s) {
    if (c in p) {
      if (!stack.length) return false;
      if (stack[stack.length - 1] === p[c]) stack.pop();
    } else stack.push(c);
  }

  console.log(stack, !stack.length);
  return !stack.length;
};

// TEST
// console.log(isValid('()'), true);
console.log(isValid('(]'), false);
