function positiveSum(arr) {
  let onlyPos = arr.filter(elem => {
    if (elem >= 0) {
      return true;
    }
    return false;
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (onlyPos.length === 0) {
    return 0;
  }
  return onlyPos.reduce(reducer);
}
console.log(positiveSum([1, -1, -3, 2, -4, 2]));
console.log(positiveSum([]));
