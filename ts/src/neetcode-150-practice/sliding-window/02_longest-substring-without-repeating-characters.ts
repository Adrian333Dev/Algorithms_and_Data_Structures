import { ITestCase, runTests } from '../../utils/tests';

const lengthOfLongestSubstring = (s: string): number => {
  let l = 0,
    wCount = new Set<string>(),
    maxLen = 0;
  for (const c of s) {
    if (wCount.has(c)) {
      maxLen = Math.max(maxLen, wCount.size);
      while (wCount.has(c)) wCount.delete(s.charAt(l++));
    }
    wCount.add(c);
  }
  return Math.max(wCount.size, maxLen);
};

// TEST CASES
const testCases: ITestCase[] = [
  { input: 'abcabcbb', expected: 3 },
  { input: 'bbbbb', expected: 1 },
  { input: 'pwwkew', expected: 3 },
  { input: '', expected: 0 },
  { input: ' ', expected: 1 },
  { input: 'au', expected: 2 },
  { input: 'aab', expected: 2 },
  { input: 'dvdf', expected: 3 },
  { input: 'abba', expected: 2 },
  { input: 'tmmzuxt', expected: 5 },
];

runTests(lengthOfLongestSubstring, testCases);
