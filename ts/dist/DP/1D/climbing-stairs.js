"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tests_1 = require("./../../utils/tests");
const climbStairs = (n) => {
    if (n <= 2)
        return n;
    let result = 0, first = 1, second = 2;
    for (let i = 3; i <= n; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
};
// TEST CASES
const testCases = [
    { input: 2, expected: 2 },
    { input: 3, expected: 3 },
    { input: 4, expected: 5 },
    { input: 5, expected: 8 },
    { input: 6, expected: 13 },
    { input: 7, expected: 21 },
    { input: 8, expected: 34 },
    { input: 9, expected: 55 },
    { input: 10, expected: 89 },
    { input: 11, expected: 144 },
    { input: 12, expected: 233 },
    { input: 13, expected: 377 },
    { input: 14, expected: 610 },
    { input: 15, expected: 987 },
    { input: 16, expected: 1597 },
    { input: 17, expected: 2584 },
    { input: 18, expected: 4181 },
    { input: 19, expected: 6765 },
    { input: 20, expected: 10946 },
    { input: 21, expected: 17711 },
    { input: 22, expected: 28657 },
    { input: 23, expected: 46368 },
    { input: 24, expected: 75025 },
    { input: 25, expected: 121393 },
    { input: 26, expected: 196418 },
    { input: 27, expected: 317811 },
    { input: 28, expected: 514229 },
    { input: 29, expected: 832040 },
    { input: 30, expected: 1346269 },
    { input: 31, expected: 2178309 },
    { input: 32, expected: 3524578 },
    { input: 33, expected: 5702887 },
    { input: 34, expected: 9227465 },
    { input: 35, expected: 14930352 },
    { input: 36, expected: 24157817 },
    { input: 37, expected: 39088169 },
    { input: 38, expected: 63245986 },
    { input: 39, expected: 102334155 },
    { input: 40, expected: 165580141 },
    { input: 41, expected: 267914296 },
];
(0, tests_1.runTests)(climbStairs, testCases);
