function validateUsr(username) {
  return (
    username !== '' &&
    username.match(/[a-z0-9_]/g).join('') === username &&
    username.length > 3 &&
    username.length < 17
  );
}
console.log(validateUsr('privet123_'));
console.log(validateUsr('privet123_ASD'));
console.log(validateUsr('AASSsdasd123_'));
console.log(validateUsr('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));
console.log(validateUsr('aa'));
