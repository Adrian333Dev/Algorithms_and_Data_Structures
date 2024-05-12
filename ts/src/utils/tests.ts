export interface ITestCase {
  input: any;
  expected: any;
  // params?: any;
}

export const runTests = (fn: Function, testCases: ITestCase[]) => {
  testCases.forEach(({ input, expected }, i) => {
    const result = JSON.stringify(fn(...input));
    const expectedStr = JSON.stringify(expected);
    if (result !== expectedStr) {
      throw new Error(
        `Expected ${expectedStr} but got ${result} for input ${JSON.stringify(
          input
        )}`
      );
    } else console.log(`Test ${i + 1} passed ✅`);
  });
};
