function myAtoi(s: string): number {
  let [l, isPositive, sum, currInt] = [0, true, 0, 0];
  while (s[l] === ' ') l++;
  if (s[l] === '-') isPositive = false;
  if (['+', '-'].includes(s[l])) l++;
  while (s[l] === '0') l++;
  while (l < s.length) {
    currInt = s.charCodeAt(l);
    if (currInt < 48 || currInt > 57) break;
    sum += parseInt(s[l]);
    sum *= 10;
    l++;
  }
  sum /= 10;
  return isPositive
    ? Math.min(Math.pow(2, 31) - 1, sum)
    : Math.max(Math.pow(-2, 31), -sum);
}

console.log(myAtoi('42'), ' == 42');
console.log(myAtoi('   -042'), ' == -42');
console.log(myAtoi('1337c0d3'), ' == 1337');
console.log(myAtoi('0-1'), ' == 0');
console.log(myAtoi('words and 987'), ' == 0');
console.log(myAtoi('+1'), ' == 1');
console.log(myAtoi('21474836460'), ' == 2147483647');
