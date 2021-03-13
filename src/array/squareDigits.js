function squareDigits(num) {
  const StrNum = String(num);
  const numArr = StrNum.split('');
  const arr = [];
  for (let i = 0; i < numArr.length; i++) {
    let a = Math.pow(numArr[i], 2);
    arr.push(a);
  }
  let b = arr.join('');

  return +b;
}

console.log(squareDigits(9119));
