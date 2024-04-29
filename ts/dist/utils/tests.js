"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTests = void 0;
const runTests = (fn, testCases) => {
    testCases.forEach(({ input, expected, params }, i) => {
        const result = JSON.stringify(fn(input, params));
        const expectedStr = JSON.stringify(expected);
        if (result !== expectedStr) {
            throw new Error(`Expected ${expectedStr} but got ${result} for input ${JSON.stringify(input)}`);
        }
        else
            console.log(`Test ${i + 1} passed ✅`);
    });
};
exports.runTests = runTests;
