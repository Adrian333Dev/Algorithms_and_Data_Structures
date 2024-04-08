export const logSinglyLinkedList = (head) => {
  let list = '';
  while (head) {
    list += `${head.val} -> `;
    head = head.next;
  }
  list += 'null';
  console.log(list);
};