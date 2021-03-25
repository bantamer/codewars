function squares(x, n) {
  let result = x;
  if (n <= 0) {
    return [];
  } else {
    let arr = [x];
    for (let i = 1; i < n; i++) {
      result = Math.pow(result, 2);
      arr.push(result);
    }
    return arr;
  }
}
console.log(squares(2, 5));
console.log(squares(3, 3));
console.log(squares(3, 0));
console.log(squares(3, -5));
