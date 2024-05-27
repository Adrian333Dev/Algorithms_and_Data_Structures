// function isPalindrome(x: number): boolean {
//   if (x < 0) return false;
//   while (x > 9) {
//     const m = Math.pow(10, Math.floor(Math.log10(x)));
//     if (Math.floor(x / m) !== x % 10) return false;
//     x = x % m;
//     x = Math.floor(x / 10);
//   }
//   return true;
// }

function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let [temp, reversed] = [x, 0];
  while (temp > 0)
    (reversed += temp % 10), (reversed *= 10), (temp = Math.floor(temp / 10));
  return reversed === x * 10;
}

console.log(isPalindrome(121), ' == true');
console.log(isPalindrome(-121), ' == false');
console.log(isPalindrome(10), ' == false');
console.log(isPalindrome(1221), ' == true');
console.log(isPalindrome(1000021), ' == false'); // edge case
