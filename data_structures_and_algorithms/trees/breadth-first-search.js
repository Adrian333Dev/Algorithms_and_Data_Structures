import { Queue } from '../queues/queue.js';

const breadthFirstSearch = (root, search) => {
	const queue = new Queue();
	queue.enqueue(root);

	const visited = [];

	while (!queue.isEmpty()) {
		const currNode = queue.dequeue();
		visited.push(currNode.value);
		if (currNode.value === search) return currNode;
		if (currNode.left) queue.enqueue(currNode.left);
		if (currNode.right) queue.enqueue(currNode.right);
  }
};
