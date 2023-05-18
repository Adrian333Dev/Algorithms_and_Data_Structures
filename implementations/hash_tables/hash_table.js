class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
		this.size = 0;
		this._keys = [];
		this._values = [];
	}

	_hash(key) {
		let total = 0;
		const PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			const char = key[i];
			const value = char.charCodeAt(0) - 96;
			total = (total * PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		const idx = this._hash(key);
		if (!this.keyMap[idx]) this.keyMap[idx] = [];
		this.keyMap[idx].push([key, value]);

		this.size++;
		this._keys.push(key);
		this._values.push(value);
	}

	get(key) {
		const idx = this._hash(key);
		return (
			!!this.keyMap[idx] &&
			(this.keyMap[idx].find((item) => item[0] === key)?.[1] || undefined)
		);
	}

	keys() { 
		return this._keys;
	}

	values() {
		return this._values;
	}
}

// test
const ht = new HashTable();
ht.set('hello world', 'goodbye!!');
ht.set('dogs', 'are cool');
ht.set('cats', 'are fine');
ht.set('i love', 'pizza');

console.log(ht.get('hello world'));
console.log(ht.get('dogs'));
console.log(ht.get('cats'));
console.log(ht.get('i love'));

console.log(ht.keys());
console.log(ht.values());
console.log(ht.size);
