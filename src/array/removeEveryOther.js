function removeEveryOther(arr) {
  return arr.filter((_, ind) => ind % 2 === 0);
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7]));
