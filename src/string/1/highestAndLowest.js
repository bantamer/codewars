function highAndLow(numbers) {
  const sorted = numbers.split(' ').sort((a, b) => b - a);
  const max = sorted.shift();
  const min = sorted.pop();
  if (min === undefined) {
    return String(max + ' ' + max);
  }
  return String(max + ' ' + min);
}
console.log(highAndLow('1 2 3 12 -5'));
