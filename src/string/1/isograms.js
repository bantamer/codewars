function isIsogram(str) {
  let arr = str.toLowerCase().split('');
  let letters = {};

  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line no-prototype-builtins
    if (letters.hasOwnProperty(arr[i])) {
      return false;
    }
    letters[arr[i]] = 1;
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('abcbabcbabcabcbab'));
console.log(isIsogram('qweRtyuiOaysdf'));
console.log(isIsogram(''));
