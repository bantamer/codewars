function FilterString(value) {
  return +value.replace(/\D/g, '');
}
console.log(FilterString('a1n23n4n'));
