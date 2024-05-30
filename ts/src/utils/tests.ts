import { ListNode } from "./nodes";

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

export const logLinkedList = (head: ListNode | null): void => {
  if (!head) {
    console.log('Empty list');
    return;
  }

  const nodeValues: string[] = [];
  let currentNode: ListNode | null = head;

  while (currentNode !== null) {
    nodeValues.push(currentNode.val.toString());
    currentNode = currentNode.next;
  }

  console.log(nodeValues.join(' -> '));
};
