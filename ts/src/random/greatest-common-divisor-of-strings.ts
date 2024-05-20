function gcdOfStrings(shortStr: string, longStr: string) {
  if (shortStr.length > longStr.length)
    [shortStr, longStr] = [longStr, shortStr];

  const shortL = shortStr.length,
    longL = longStr.length;

  for (let i = shortL; i > 0; i--) {
    if (shortL % i !== 0 || longL % i !== 0) continue;

    let remainL = longL / i;
    let remainS = shortL / i;

    let valid = true;

    for (let j = 0; j < i; j++) {
      for (let k = 0; k < remainL; k++) {
        if (shortStr.charAt(j) !== longStr.charAt(k * i + j)) {
          valid = false;
          break;
        }
      }
      if (!valid) break;
      for (let k = 0; k < remainS; k++) {
        if (shortStr.charAt(j) !== shortStr.charAt(k * i + j)) {
          valid = false;
          break;
        }
      }
    }

    if (valid) return shortStr.slice(0, i);
  }

  return '';
}

console.log(gcdOfStrings('ABCABC', 'ABC'), '== ABC');
console.log(gcdOfStrings('ABABAB', 'ABAB'), '== AB');
console.log(gcdOfStrings('AAAAAAAAA', 'AAACCC'), '== ""');
