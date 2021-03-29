function count(array) {
  let numbers = {};
  array.forEach(element => {
    // eslint-disable-next-line no-prototype-builtins
    if (numbers.hasOwnProperty(element)) {
      numbers[element] += 1;
    } else {
      numbers[element] = 1;
    }
  });
  return numbers;
}

console.log("{ 'a': 2, 'b': 3 }", count(['a', 'a', 'b', 'b', 'b']));
