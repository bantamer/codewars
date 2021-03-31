function fridayTheThirteenths(start, end = start) {
  let result = '';
  for (let year = start; year <= end; year++) {
    for (let month = 0; month < 12; month++) {
      let date = new Date(year, month, 13);
      if (date.getDay() === 5) {
        result += `${month + 1}/13/${year} `;
      }
    }
  }
  return result.trim();
}

console.log(fridayTheThirteenths(1999, 2000), '8/13/1999 10/13/2000');
