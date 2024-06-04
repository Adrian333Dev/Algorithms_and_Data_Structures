import { ListNode } from '../utils/nodes';
import { logLinkedList } from '../utils/tests';

function findNodeBeforeMid(start: ListNode) {
  let end = start.next;
  while (end?.next) {
    end = end.next;
    if (end) (start = start.next), (end = end.next);
  }
  return start;
}

function getNodeBeforeMid(start: ListNode) {
  let end = start.next,
    prevStart = start;
  while (end) {
    (end = end.next), (prevStart = start), (start = start.next);
    if (end) end = end.next;
  }
  return prevStart;
}

function reverseList(h: ListNode): ListNode {
  let [prev, curr, next] = [null, h, null];
  while (curr)
    (next = curr.next), (curr.next = prev), (prev = curr), (curr = next);
  return prev;
}

function reorderList(h: ListNode | null): void {
  if (!h || !h.next || !h.next.next) return;
  // console.log(`head before`);
  // logLinkedList(h);
  const nodeBeforeMid = findNodeBeforeMid(h);
  console.log(`before mid`);
  logLinkedList(nodeBeforeMid);
  const reveredMid = reverseList(nodeBeforeMid.next);
  nodeBeforeMid.next = null;
  console.log(`reveredMid`);
  logLinkedList(reveredMid);
  let [prev, curr, next] = [null, h, null];
  while (reveredMid) {
    next = curr.next;
    curr.next = reveredMid;
    
  }
}

const h1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
const h2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const h3 = new ListNode(1, new ListNode(2));

// logLinkedList(reverseList(h1));
// logLinkedList(reverseList(h2));
// logLinkedList(reverseList(h3));

// logLinkedList(findMid(h1));
// logLinkedList(findMid(h2));
// logLinkedList(findMid(h3));

reorderList(h1);
reorderList(h2);
reorderList(h3);
