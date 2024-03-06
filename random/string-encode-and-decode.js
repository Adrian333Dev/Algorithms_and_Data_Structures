class Solution {
  #hStart = '[[';
  #hEnd = ']]';
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encoded = '';
    for (const str of strs) {
      // encoded += this.#hStart + str.length + this.#hEnd;
      encoded += this.#hStart;
      for (let j = 0; j < str.length; j++) {
        encoded += c.charCodeAt(0);
        if (j < str.length - 1) encoded += ':';
      }
      encoded += this.#hEnd;
    }
    return encoded;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let decoded = [];
    for (let i = 0; i < str.length; i++) {
      let s = 0,
        e = 0,
        sFound = false,
        eFound = false;
      while (s < str.length) {
        if (str.charAt(s) !== this.#hStart.charAt(0)) s++;
        else if (str.slice(s, this.#hStart.length) === this.#hStart) {
          sFound = true;
          break;
        } else s += this.#hStart.length;
      }
      e = s + 1;
      while (e < str.length) {
        if (str.charAt(e) !== this.#hEnd.charAt(0)) e++;
        else if (str.slice(e, this.#hEnd.length) === this.#hEnd) {
          eFound = true;
          break;
        } else e += this.#hEnd.length;
      }
      if (sFound && eFound) {
        let decodedStr = '';
        for (let i = s + this.#hStart.length; i < e; i++) {
          let idxOfSeperator = 
        }
      }
    }
  }
}
