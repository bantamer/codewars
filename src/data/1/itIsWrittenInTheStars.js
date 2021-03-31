function starSign(date) {
  const month = date.getMonth();
  const day = date.getDate();
  if ((month === 0 && day >= 21) || (month === 1 && day <= 19) || (month === 1 && day === 0)) {
    return 'Aquarius';
  }
  if ((month === 1 && day >= 20) || (month === 2 && day <= 20) || (month === 2 && day === 0)) {
    return 'Pisces';
  }
  if ((month === 2 && day >= 21) || (month === 3 && day <= 20) || (month === 3 && day === 0)) {
    return 'Aries';
  }
  if ((month === 3 && day >= 21) || (month === 4 && day <= 21) || (month === 4 && day === 0)) {
    return 'Taurus';
  }
  if ((month === 4 && day >= 22) || (month === 5 && day <= 21) || (month === 5 && day === 0)) {
    return 'Gemini';
  }
  if ((month === 5 && day >= 22) || (month === 6 && day <= 22) || (month === 6 && day === 0)) {
    return 'Cancer';
  }
  if ((month === 6 && day >= 23) || (month === 7 && day <= 23) || (month === 9 && day === 0)) {
    return 'Leo';
  }
  if ((month === 7 && day >= 24) || (month === 8 && day <= 23) || (month === 10 && day === 0)) {
    return 'Virgo';
  }
  if ((month === 8 && day >= 24) || (month === 9 && day <= 23) || (month === 11 && day === 0)) {
    return 'Libra';
  }
  if ((month === 9 && day >= 24) || (month === 10 && day <= 22) || (month === 0 && day === 0)) {
    return 'Scorpio';
  }
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21) || (month === 1 && day === 0)) {
    return 'Sagittarius';
  }
  if ((month === 11 && day >= 22) || (month === 0 && day <= 20) || (month === 2 && day === 0)) {
    return 'Capricorn';
  }
}

console.log(starSign(new Date(1970, 5, 5)), 'Gemini');
console.log(starSign(new Date(1970, 5, 5)), 'Gemini');
