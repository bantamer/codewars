function accum(s) {
  let arr = s.toUpperCase().split('');
  function repeater(element, index) {
    let el = element;
    for (let i = 0; i < index; i++) {
      el = `${el}${element.toLowerCase()}`;
    }
    return el;
  }
  return arr.map(repeater).join('-');
}

console.log(
  'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
  accum('ZpglnRxqenU')
);
console.log('A-Bb-Ccc-Ddd', accum('AbCd'));
console.log(
  'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
  accum('NyffsGeyylB')
);
console.log(
  'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu',
  accum('MjtkuBovqrU')
);
console.log(
  'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm',
  accum('EvidjUnokmM')
);
console.log(
  'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc',
  accum('HbideVbxncC')
);
