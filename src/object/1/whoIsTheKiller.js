function killer(suspectInfo, dead) {
  let result = Object.entries(suspectInfo);
  let i = 0;
  console.log(result[1]);
  if (result[i].some(el => dead[i].includes(el))) {
    dead[i] = dead[i++];
  } else {
    result[i] = result[i++];
  }
}

console.log(
  killer(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )
);
