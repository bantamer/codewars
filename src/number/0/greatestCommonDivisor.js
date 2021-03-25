function mygcd(x, y) {
  if (!y) {
    return x;
  }

  return mygcd(y, x % y);
}

console.log(mygcd(30, 12));
