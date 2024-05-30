import { ListNode } from '../utils/nodes';
import { logLinkedList } from '../utils/tests';

function getLen(head: ListNode | null): number {
  let len = 0;
  while (head) (head = head.next), len++;
  return len || 0;
}

function findNodeAtIndex(head: ListNode, i: number): ListNode | null {
  let [j, prev] = [0, null];
  while (j < i) (prev = head), (head = head.next), j++;
  return prev;
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return head;
  let len = getLen(head);
  k = k % len;
  if (len == k || k == 0) return head;
  let prev = findNodeAtIndex(head, len - k);
  const newHead = prev.next;
  prev.next = null;
  let curr = newHead;
  while (curr.next) curr = curr.next;
  curr.next = head;
  return newHead;
}

const head1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
const head2 = new ListNode(1);
const head3 = new ListNode(1, new ListNode(2));

// logLinkedList(head2);
rotateRight(head1, 2);
logLinkedList(head1);
