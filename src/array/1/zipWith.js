function zipWith(fn, a0, a1) {
  let arr;
  let result = [];
  a0.length <= a1.length ? (arr = a0) : (arr = a1);
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
}

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
