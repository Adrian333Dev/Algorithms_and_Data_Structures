class Pair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}
}

class HashMap {
	constructor() {
		(this.size = 0),
			(this.max = 2),
			(this.map = new Array(this.max).fill(null));
	}

	get(key) {
		const index = this._hash(key);
		while (this.map[index] !== null) {
			if (this.map[index].key === key) return this.map[index].value;
			index++, (index %= this.max);
		}
		return null;
	}

	put(key, value) {
		const index = this._hash(key);
		while (true) {
			if (this.map[index] === null) {
				this.map[index] = new Pair(key, value);
				this.size++;
				if (this.size > this.max * 0.7) this._rehash();
				return;
			} else if (this.map[index].key === key) {
				this.map[index].value = value;
				return;
			}
			index++, (index %= this.max);
		}
	}

  remove(key) {
    const index = this._hash(key);
    while (this.map[index] !== null) {
      if (this.map[index].key === key) {
        this.map[index] = null;
        this.size--;
        return;
      }
      index++, (index %= this.max);
    }
  }

	_hash(key) {
		let total = 0,
			PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			const value = key[i].charCodeAt(0) - 96;
			total = (total * PRIME + value) % this.max;
		}
		return total;
	}

	_rehash() {
		this.max *= 2;
		const temp = this.map;
		this.map = new Array(this.max).fill(null);
		temp.forEach(([key, value]) => key !== null && this.put(key, value));
	}
}
