function numRescueBoats(people: number[], limit: number): number {
  const map = new Map<number, number>();
  for (const p of people) map.set(p, (map.get(p) || 0) + 1);
  const shorted = Array.from(map.entries())
    .sort((a, b) => a[1] - b[1])
    .map((entry) => entry[0]);
  let i = shorted.length - 1;
  // while(i >= 0) {
  // }
  return 0;
}
