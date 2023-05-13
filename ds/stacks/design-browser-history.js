class BrowserHistory {
	backHistory = [];
	fowardHistory = [];

	constructor(homepage) {
		this.backHistory.push(homepage);
	}

	visit(url) {
		this.fowardHistory = [];
		this.backHistory.push(url);
	}

	back(steps) {
		if (this.backHistory.length === 1) return this.backHistory[0];
		steps = Math.min(steps, this.backHistory.length - 1);
		while (steps > 0) {
			this.fowardHistory.push(this.backHistory[this.backHistory.length - 1]);
			this.backHistory.pop();
			steps--;
		}
		return this.backHistory[this.backHistory.length - 1];
	}

	forward(steps) {
		steps = Math.min(steps, this.fowardHistory.length);
		while (steps > 0) {
			this.backHistory.push(this.fowardHistory[this.fowardHistory.length - 1]);
			this.fowardHistory.pop();
			steps--;
		}
		return this.backHistory[this.backHistory.length - 1];
	}
}

// input: ["BrowserHistory","visit","back","back","forward","forward","visit","visit","back"]
// input: [["zav.com"],["kni.com"],[7],[7],[5],[1],["pwrrbnw.com"],["mosohif.com"],[9]]
// output: [null,null,"zav.com","zav.com","kni.com","kni.com",null,null,"zav.com"]

const browserHistory = new BrowserHistory('zav.com');
browserHistory.visit('kni.com');

console.log(browserHistory.back(7));
console.log(browserHistory.back(7));
console.log(browserHistory.forward(5));
console.log(browserHistory.forward(1));
browserHistory.visit('pwrrbnw.com');
browserHistory.visit('mosohif.com');
console.log(browserHistory.back(9));
