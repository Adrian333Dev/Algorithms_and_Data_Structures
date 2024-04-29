"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LRUCache {
    capacity;
    cache = new Map();
    head = null;
    tail = null;
    size = 0;
    constructor(capacity) {
        this.capacity = capacity;
    }
    get(key) {
        const node = this.cache.get(key);
        if (node) {
            return node.value;
        }
        return -1;
    }
    put(key, value) { }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
