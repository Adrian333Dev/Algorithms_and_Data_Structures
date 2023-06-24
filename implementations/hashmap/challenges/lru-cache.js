class DLLNode {
	constructor(key = null, value = null) {
		(this.key = key), (this.value = value);
		(this.next = null), (this.prev = null);
	}
}

class LRUCache {
	constructor(capacity) {
		(this.cap = capacity), (this.cache = new Map());
		(this.left = new DLLNode(0, 0)), (this.right = new DLLNode(0, 0));
		(this.left.next = this.right), (this.right.prev = this.left);
	}

	remove(node) {
		(node.next.prev = node.prev), (node.prev.next = node.next);
	}

	insert(node) {
		(node.next = this.right), (node.prev = this.right.prev);
		(this.right.prev.next = node), (this.right.prev = node);
	}

	get(key) {
		if (!this.cache.has(key)) return -1;
		const node = this.cache.get(key);
		this.remove(node), this.insert(node);
		return node.value;
	}

	put(key, value) {
		if (this.cache.has(key)) this.remove(this.cache.get(key));
		const node = new DLLNode(key, value);
		this.insert(node), this.cache.set(key, node);

		if (this.cache.size > this.cap) {
			const node = this.left.next;
			this.remove(node), this.cache.delete(node.key);
		}
	}
}

// test
// ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // -1
cache.put(4, 4);
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
