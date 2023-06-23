/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = (asteroids) => {
	let stack = [asteroids[0]];
	for (let i = 1; i < asteroids.length; i++) {
    const prev = stack[stack.length - 1], curr = asteroids[i];
    if (prev > 0 && curr < 0) { 
      if (prev < Math.abs(curr)) stack.pop(),  i--;
      else if (prev + curr === 0) stack.pop();
    } else stack.push(curr);
	}
	return stack;
};

const collection = [
	[5, 10, -5],
	[8, -8],
	[10, 2, -5],
	[-2, -2, 1, -2],
	[1, -2, -2, -2],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, -2, -2, -2],
], answer = [[5, 10], [], [10], [-2, -2, -2], [-2, -2, -2], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]];

collection.forEach((item, index) => { 
  const result = asteroidCollision(item).toString();
  if (result === answer[index].toString()) console.log(`Success at test case ${index + 1}`);
  else console.log(`Failed at test case ${index + 1}: Expected ${answer[index]}, but got ${result}`);
});
