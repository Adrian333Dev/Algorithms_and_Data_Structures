import { ITestCase } from './../../utils/tests';
import { runTests } from '../../utils/tests';

const checkInclusion = (s1: string, s2: string): boolean => {
  if (s2.length < s1.length) return false;

  const s1Hash = Array(26).fill(0);
  const s2Hash = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++)
    s1Hash[s1.charCodeAt(i) - 97]++, s2Hash[s2.charCodeAt(i) - 97]++;
  console.log('S1_HASH', s1Hash);
  console.log('S2_HASH', s2Hash);

  let matches = 0;
  for (let i = 0; i < 26; i++) matches += s1Hash[i] === s2Hash[i] ? 1 : 0;
  console.log('MATCHES', matches);

  let l = 0;
  for (let r = s1.length; r < 26; r++) {
    if (matches === 26) return true;
    s2Hash[s2.charCodeAt(r - 97)]++;
    if (s1Hash[r] === s2Hash[r]) matches++;
    else if (s1Hash[r] + 1 === s2Hash[r]) matches--;

    s2Hash[s2.charCodeAt(l - 97)]--;
    if (s1Hash[l] === s2Hash[l]) matches++;
    else if (s1Hash[l] + 1 === s2Hash[l]) matches--;
    l++;
  }

  return matches === 26;
};

// TESTS
// const testCases: ITestCase[] = [{ input: ['ab', 'eidboaoo'], expected: false }];

// runTests(checkInclusion, testCases);

console.log(checkInclusion('ab', 'eidboaoo')); // false
