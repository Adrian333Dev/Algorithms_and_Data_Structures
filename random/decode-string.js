/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  let stack = [];

  let i = 0;
  while (i < s.length) {
    const c = s.charAt(i);
    if (c === ']') {
      let str = '';
      while (stack[stack.length - 1] !== '[') str = stack.pop() + str;
      
      stack.pop();
      let k = '';
      while (!isNaN(stack[stack.length - 1])) k = stack.pop() + k;
      stack.push(str.repeat(+k));
    } else stack.push(c);
    i++;
  }

  return stack.join('');
};

// TEST
console.log(
  decodeString('3[a]2[bc]') === 'aaabcbc' || decodeString('3[a]2[bc]')
);
console.log(
  decodeString('3[a2[c]]') === 'accaccacc' || decodeString('3[a2[c]]')
);
console.log(
  decodeString('2[abc]3[cd]ef') === 'abcabccdcdcdef' ||
    decodeString('2[abc]3[cd]ef')
);
