class RecentCounter {
	constructor() {
		(this.head = null), (this.tail = null), (this.size = 0);
	}
	/**
	 * @param {number} t
	 * @return {number}
	 */

	ping(t) {
		this.enqueue(t);
		while (this.tail.val - this.head.val > 3000) this.dequeue();
		return this.size;
	}

	enqueue(val) {
		if (!this.head) (this.head = new Node(val)), (this.tail = this.head);
		else (this.tail.next = new Node(val)), (this.tail = this.tail.next);
		this.size++;
	}

	dequeue() {
		if (!this.head) return null;
		(this.head = this.head.next), this.size--;
	}
}

class Node {
	constructor(val = null, next = null) {
		this.val = val;
		this.next = next;
	}
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1)); // 1
console.log(recentCounter.ping(100)); // 2
console.log(recentCounter.ping(3001)); // 3
console.log(recentCounter.ping(3002)); // 3
