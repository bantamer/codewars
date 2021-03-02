function isPalindrome(value) {
  let str = String(value);
  let strReversed = str.split('').reverse().join('');
  if (strReversed === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('HelloWorld'));
console.log(isPalindrome('tennet'));
console.log(isPalindrome(12321));
console.log(isPalindrome('.!.'));
