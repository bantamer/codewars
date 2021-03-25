function findOdd(A) {
  let numbers = {};
  A.forEach(element => {
    // eslint-disable-next-line no-prototype-builtins
    if (numbers.hasOwnProperty(element)) {
      numbers[element] += 1;
    } else {
      numbers[element] = 1;
    }
  });
  for (const [key, value] of Object.entries(numbers)) {
    if (value % 2 === 1) {
      return +key;
    }
  }
}

console.log('5', findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log('10', findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log('1', findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
