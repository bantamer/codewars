function findOutlier(integers) {
  function isOdd(elem) {
    return elem % 2 !== 0;
  }
  function isEven(elem) {
    return elem % 2 === 0;
  }
  if (
    (isEven(integers[0]) && isEven(integers[1])) ||
    (isEven(integers[1]) && isEven(integers[2])) ||
    (isEven(integers[0]) && isEven(integers[2]))
  ) {
    return integers.find(isOdd);
  }
  return integers.find(isEven);
}

console.log('1:', findOutlier([0, 1, 2]));
console.log('2:', findOutlier([1, 2, 3]));
console.log('3:', findOutlier([2, 6, 8, 10, 3]));
