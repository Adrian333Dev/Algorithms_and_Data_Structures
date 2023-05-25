import { PriorityQueue } from '../trees/priority-queue.js';

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2, weight) {
		this.adjacencyList[vertex1].push({ node: vertex2, weight });
		this.adjacencyList[vertex2].push({ node: vertex1, weight });
	}

	Dijkstra(start, finish) {
		const distances = {};
		const prev = {};
		const queue = new PriorityQueue();
		let min;

		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				queue.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				queue.enqueue(vertex, Infinity);
			}
			prev[vertex] = null;
		}

		while (!queue.isEmpty()) {
			min = queue.dequeue().value;
			if (min === finish) {
				let path = [];
				while (prev[min]) {
					path.push(min);
					min = prev[min];
				}
				path.push(min);
				console.log(path.reverse());
				break;
			}
			if (min || distances[min] !== Infinity)
				for (let neighbor in this.adjacencyList[min]) {
					let nextNode = this.adjacencyList[min][neighbor];
					let candidate = distances[min] + nextNode.weight;
					let nextNeighbor = nextNode.node;
					if (candidate < distances[nextNeighbor]) {
						distances[nextNeighbor] = candidate;
						prev[nextNeighbor] = min;
						queue.enqueue(nextNeighbor, candidate);
					}
				}
		}
	}
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.Dijkstra('A', 'E');
