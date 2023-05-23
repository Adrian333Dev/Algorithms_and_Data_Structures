const hasPathRecursive = (graph, src, dst, visited) => {
	if (src === dst) return true;
	visited.add(src);
	for (let neighbor of graph[src])
		!visited.has(neighbor) &&
			hasPathRecursive(graph, neighbor, dst, visited) &&
			true;
	return false;
}; 

const hasPathIterative = (graph, src, dst) => {
	const stack = [src];
	const visited = new Set();
	while (stack.length) {
		const node = stack.pop();
		if (node === dst) return true;
		if (visited.has(node)) continue;
		visited.add(node);
		for (let neighbor of graph[node]) stack.push(neighbor);
	}
	return false;
};

const hasPath = (graph, src, dst) => {
	const visited = new Set();
	return hasPathRecursive(graph, src, dst, visited);
};
