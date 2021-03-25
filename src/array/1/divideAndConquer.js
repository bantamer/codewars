function divCon(x) {
  function isString(i) {
    let a = typeof i;
    return a === 'string';
  }
  function isNumber(i) {
    let a = typeof i;
    return a === 'number';
  }
  let str = x.filter(isString);
  let num = x.filter(isNumber);

  let reducer = (acc, i) => Number(acc) + Number(i);

  return num.reduce(reducer, 0) - str.reduce(reducer, 0);
}

console.log(divCon([9, 3, '7', '3']));
