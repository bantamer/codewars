function calc(x) {
  function isCharCode(e) {
    return e.charCodeAt();
  }
  let total1 = x.split('').map(isCharCode).join('');
  let total2 = total1.replace(/7/gi, '1');
  const reducer = (acc, value) => +acc + +value;
  let a = total1.split('').reduce(reducer);
  let b = total2.split('').reduce(reducer);

  return a - b;
}

// console.log(6, calc('ABC'));
console.log(6, calc('abcdef'));
