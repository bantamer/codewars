function findShort(s) {
  let res = s.split(' ');
  let a = Infinity;

  for (let i = 0; i < res.length; i++) {
    a = Math.min(res[i].length, a);
  }
  return a;
}

console.log(findShort('найти самое короткое слово'));
