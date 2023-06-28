class TimeLimitedCache {
	constructor() {
		this.map = new Map();
	}
	/**
	 * @param {number} key
	 * @param {number} value
	 * @param {number} duration time until expiration in ms
	 * @return {boolean} if un-expired key already existed
	 */
	set(key, value, duration) {
		let exists = false;
		if (this.map.has(key))
			clearTimeout(this.map.get(key).timeout), this.map.delete(key), (exists = true);
		this.map.set(key, {
			value,
			timeout: setTimeout(() => this.map.delete(key), duration),
		});
		return exists;
	}
	/**
	 * @param {number} key
	 * @return {number} value associated with key
	 */
	get(key) {
		return this.map.has(key) ? this.map.get(key).value : -1;
	}
	/**
	 * @return {number} count of non-expired keys
	 */
	count() {
		return this.map.size;
	}
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
