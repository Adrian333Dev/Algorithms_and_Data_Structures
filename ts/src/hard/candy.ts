function candy(ratings: number[]): number {
  const res = Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++)
    if (ratings[i] > ratings[i - 1]) res[i] = res[i - 1] + 1;
  for (let i = ratings.length - 2; i >= 0; i--)
    if (ratings[i] > ratings[i + 1] && res[i] <= res[i + 1] + 1)
      res[i] = res[i + 1] + 1;
  return res.reduce((sum, n) => sum + n, 0);
}

// [1,3,4,5,2] => 11
console.log(candy([1, 3, 4, 5, 2]));
