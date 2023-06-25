class Node {
	constructor(value) {
		(this.value = value), (this.next = null);
	}
}

class MyHashSet {
	constructor() {
		(this.size = 0), (this.max = 2), (this.set = [null, null]);
	}

	add(key) {
		let idx = this._hash(key),
			node = this.set[idx];
		if (!node) this.set[idx] = new Node(key);
		else {
			while (node.next) node = node.next;
			node.next = new Node(key);
		}
		this.size++;
		if (this.size > this.max * 0.7) this._rehash();
	}

	remove(key) {
		let idx = this._hash(key),
			node = this.set[idx];
		console.log(idx, node);
		if (!node) return;
		else if (node.value === key) this.set[idx] = node.next;
		else {
			while (node.next && node.next.value !== key) node = node.next;
			if (!node.next) return;
			node.next = node.next.next;
		}
		console.log(this.set[idx]);
		this.size--;
		if (this.size < this.max * 0.2) this._rehash();
	}

	contains(key) {
		let node = this.set[this._hash(key)];
		while (node && node.value !== key) node = node.next;
		return !!node;
	}

	values() {
		return this.set.reduce((arr, node) => {
			while (node) arr.push(node.value), (node = node.next);
			return arr;
		}, []);
	}

	_hash(key) {
		let total = 0, PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++)
			total = (total * PRIME + key[i].charCodeAt(0) - 96) % this.max;
		return total;
	}

	_nextPrime() {
		const min = this.max * 1.5,
			max = this.max * 3;
		const sieve = new Array(max + 1).fill(true);
		sieve[0] = sieve[1] = false;
		for (let i = 2; i <= Math.sqrt(max); i++)
			if (sieve[i]) for (let j = i * i; j <= max; j += i) sieve[j] = false;
		for (let i = min; i <= max; i++) if (sieve[i]) return i;
		return this.max * 2;
	}

	_rehash() {
		this.max *= 2;
		const oldSet = this.set;
		this.set = new Array(this.max).fill(null);
		oldSet.forEach((node) => {
			while (node) this.add(node.value), (node = node.next);
		});
	}
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// Tests

// Input: ["MyHashSet","add","add","contains","contains","add","contains","remove","contains"]
// [[],[1],[2],[1],[3],[2],[2],[2],[2]]

const hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
console.log(hashSet.contains(1)); // returns true
console.log(hashSet.contains(3)); // returns false (not found)
hashSet.add(2);
console.log(hashSet.contains(2)); // returns true
hashSet.remove(2);
console.log(hashSet.contains(2)); // returns false (already removed)


