import { ListNode } from '../utils/nodes';
import { logLinkedList } from '../utils/tests';

function findMid(start: ListNode) {
  let end = start.next;
  while (end) {
    end = end.next;
    start = start.next;
    if (end) end = end.next;
  }
  return start;
}

function reorderList(h: ListNode | null): void {
  if (!h || !h.next || !h.next.next) return;
  const m = findMid(h);
  let [curr] = [h];
  while (curr) {
    
  }
}

const h1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
const h2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const h3 = new ListNode(1, new ListNode(2));

logLinkedList(findMid(h1));
logLinkedList(findMid(h2));
logLinkedList(findMid(h3));
