function nthFibo(n) {
  let a = 0;
  let b = 1;
  if (n === 1) {
    return 0;
  } else if (n === undefined) {
    return 0;
  }
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(1, nthFibo(1));
console.log(2, nthFibo(2));
console.log(3, nthFibo(3));
console.log(4, nthFibo(4));
console.log(nthFibo());
