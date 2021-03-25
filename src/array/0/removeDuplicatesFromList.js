function distinct(a) {
  let mySet = new Set();
  return a.filter(elem => {
    if (!mySet.has(elem)) {
      mySet.add(elem);
      return true;
    }
    return false;
  });
}

console.log(distinct([1, 2, 3, 1, 2, 4]));
console.log(distinct([1, 2]));
console.log(distinct([1]));
