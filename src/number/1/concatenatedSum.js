function checkConcatenatedSum(num, n) {
  let positiveNum = Math.abs(num);
  let arr = String(positiveNum).split('');
  let reducer = (acc, i) => Number(acc) + Number(i.repeat(n));
  let result = arr.reduce(reducer, 0);
  return result === positiveNum;
}

console.log(checkConcatenatedSum(2997, 3));
console.log(checkConcatenatedSum(22, 3));
console.log(checkConcatenatedSum(198, 2));
console.log(checkConcatenatedSum(-198, 2));
console.log(checkConcatenatedSum(-9980, 6));
