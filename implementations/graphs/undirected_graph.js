import { Queue } from '../queues/queue.js';

// Adjacency List
class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) return;
		this.adjacencyList[vertex].forEach((v) => this.removeEdge(vertex, v));
		delete this.adjacencyList[vertex];
	}

	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	removeEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(v) => v !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(v) => v !== vertex1
		);
	}

	depthFirstRecursive(start) {
		const result = [];
		const visited = new Set();
		const list = this.adjacencyList;

		(function dfs(vertex) {
			if (!vertex) return;
			visited.add(vertex);
			result.push(vertex);
			list[vertex].forEach((next) => !visited.has(next) && dfs(next));
		})(start);

		return result;
	}

	depthFirstIterative(start) {
		const result = [];
		const visited = new Set();
		const stack = [start];
		let curr;

		visited.add(start);
		while (stack.length) {
			curr = stack.pop();
			result.push(curr);
			this.adjacencyList[curr].forEach((next) => {
				if (!visited.has(next)) {
					visited.add(next);
					stack.push(next);
				}
			});
		}

		return result;
	}

	breadthFirst(start) {
		const result = [];
		const visited = new Set();
		const queue = new Queue();
		let curr;

		visited.add(start);
		queue.enqueue(start);
		while (queue.length) {
			curr = queue.dequeue();
			result.push(curr);
			this.adjacencyList[curr].forEach((next) => {
				if (!visited.has(next)) {
					visited.add(next);
					queue.enqueue(next);
				}
			});
		}

		return result;
	}
}

// Matrix Representation
class Graph {
	constructor() {
		this.matrix = [];
	}

	addVertex() {
		this.matrix.push([]);
		this.matrix.forEach((row) => row.push(0));
	}

	removeVertex(vertex) {
		if (!this.matrix[vertex]) return;
		this.matrix[vertex].forEach((v, i) => this.removeEdge(vertex, i));
		this.matrix.splice(vertex, 1);
		this.matrix.forEach((row) => row.splice(vertex, 1));
	}

	addEdge(vertex1, vertex2) {
		if (!this.matrix[vertex1] || !this.matrix[vertex2]) return;
		this.matrix[vertex1][vertex2] = 1;
		this.matrix[vertex2][vertex1] = 1;
	}

	removeEdge(vertex1, vertex2) {
		if (!this.matrix[vertex1] || !this.matrix[vertex2]) return;
		this.matrix[vertex1][vertex2] = 0;
		this.matrix[vertex2][vertex1] = 0;
	}

	depthFirstRecursive(start) {
		const result = [];
		const visited = new Set();
		const matrix = this.matrix;

		(function dfs(vertex) {
			if (!vertex) return;
			visited.add(vertex);
			result.push(vertex);
			matrix[vertex].forEach((v, i) => !visited.has(i) && dfs(i));
		})(start);

		return result;
	}

	depthFirstIterative(start) {
		const result = [];
		const visited = new Set();
		const stack = [start];
		let curr;

		visited.add(start);
		while (stack.length) {
			curr = stack.pop();
			result.push(curr);
			this.matrix[curr].forEach((v, i) => {
				if (!visited.has(i)) {
					visited.add(i);
					stack.push(i);
				}
			});
		}

		return result;
	}

	breadthFirst(start) {
		const result = [];
		const visited = new Set();
		const queue = new Queue();
		let curr;

		visited.add(start);
		queue.enqueue(start);
		while (queue.length) {
			curr = queue.dequeue();
			result.push(curr);
			this.matrix[curr].forEach((v, i) => {
				if (!visited.has(i)) {
					visited.add(i);
					queue.enqueue(i);
				}
			});
		}

		return result;
	}
}
