function disemvowel(str) {
  return str.replace(/[euioa]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!'));
