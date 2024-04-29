"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tests_1 = require("./../utils/tests");
const lengthOfLongestSubstring = (s) => {
    let max = 0, i = 0, charsSet = new Set();
    for (let j = 0; j < s.length; j++) {
        const char = s.charAt(j);
        if (charsSet.has(char)) {
            max = Math.max(max, charsSet.size);
            while (charsSet.has(char) && i < j)
                charsSet.delete(s.charAt(i++));
            charsSet.add(char);
        }
        else
            charsSet.add(char);
    }
    return Math.max(charsSet.size, max);
};
// "abba"
// TEST CASES
const testCases = [
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
(0, tests_1.runTests)(lengthOfLongestSubstring, testCases);
