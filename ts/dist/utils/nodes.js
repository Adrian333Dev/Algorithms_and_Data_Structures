"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DLLNode = void 0;
class DLLNode {
    value;
    prev;
    next;
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}
exports.DLLNode = DLLNode;
