let sort = function (str) {
  return str.toLowerCase().split('').sort().join('');
};

let isAnagram = function (original, test) {
  return original.trim() === test.trim() ? false : sort(original) === sort(test);
};

console.log(isAnagram('tofefe', 'toffee'));
