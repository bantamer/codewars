function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError('Значение n должно быть больше 0 и меньше 12');
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(12));
console.log(factorial(13));
