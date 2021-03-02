function century(year) {
  return Math.trunc((year - 1) / 100 + 1);
}

console.log(century(1800));
