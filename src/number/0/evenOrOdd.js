function even_or_odd(number) {
  let num = number % 2;
  if (num === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(even_or_odd(3));
