import { TireNode } from '../utils/nodes';

class Trie {
  private root = new TireNode();

  constructor() {}

  insert(word: string): void {
    let curr = this.root;
    for (const c of word) {
      if (!(c in curr.children)) curr.children[c] = new TireNode();
      curr = curr.children[c];
    }
    curr.isEndOfWord = true;
  }

  search(word: string): boolean {
    let curr = this.root;
    for (const c of word) {
      if (!(c in curr.children)) return false;
      curr = curr.children[c];
    }
    return curr.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let curr = this.root;
    for (const c of prefix) {
      if (!(c in curr.children)) return false;
      curr = curr.children[c];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
