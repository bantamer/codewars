function duplicateEncode(word) {
  const arr = word.toLowerCase().split('');
  let symbols = {};
  arr.forEach(element => {
    // eslint-disable-next-line no-prototype-builtins
    if (symbols.hasOwnProperty(element)) {
      symbols[element] += 1;
    } else {
      symbols[element] = 1;
    }
  });
  let result = arr
    .map(element => {
      if (symbols[element] === 1) {
        return (element = '(');
      }
      return (element = ')');
    })
    .join('');
  return result;
}
console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('(( @'));
console.log(')())())', duplicateEncode('Success'));
