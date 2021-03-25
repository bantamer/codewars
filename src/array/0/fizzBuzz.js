function fizzbuzz(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if ((i % 3 === 0) & (i % 5 !== 0)) {
      arr.push('Fizz');
    } else if ((i % 5 === 0) & (i % 3 !== 0)) {
      arr.push('Buzz');
    } else if ((i % 3 === 0) & (i % 5 === 0)) {
      arr.push('FizzBuzz');
    } else arr.push(i);
  }

  return arr;
}

console.log(fizzbuzz(1));
console.log(fizzbuzz(2));
console.log(fizzbuzz(3));
console.log(fizzbuzz(4));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
