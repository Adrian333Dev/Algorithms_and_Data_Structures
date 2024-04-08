import { SLLNode } from '../utils/nodes.js';
import { logSinglyLinkedList } from '../utils/loggers.js';

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  let p1 = head,
    p2 = head.next,
    p1Idx = 0,
    p2Idx = 1;
  while (p2) {
    (p1 = p1.next), p1Idx++;
    while (p2 && p2Idx < p1Idx * 2) {
      (p2 = p2.next), p2Idx++;
    }
  }

  console.log('p1:');
  logSinglyLinkedList(p1);

  console.log('p2:');
  logSinglyLinkedList(p2);
};


// TEST
const head = new SLLNode(1, new SLLNode(2, new SLLNode(3, new SLLNode(4))));
console.log('head:');
logSinglyLinkedList(head);
reorderList(head);

/*
1 -> 2 -> 3 -> 4 -> 5 -> 6

LOOP 1
p1 = 1
p2 = 2

LOOP 2
p1 = 2
p2 = 4
  
LOOP 3
p1 = 3
p2 = 6
*/