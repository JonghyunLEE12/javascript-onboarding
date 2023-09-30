function problem3(number) {
  var answer;
  let result = 0;

  const checking = (number) => {
    number = String(number).split('');
    if ( number.includes('3') || number.includes('6') || number.includes('9')) {
      let count = 0;
      if ( number.includes('3')) count = number.filter(value => value == 3).length;
      if ( number.includes('6')) count = number.filter(value => value == 6).length;
      if ( number.includes('9')) count = number.filter(value => value == 9).length;
      return count;
    }
    return 0;
  }
  for ( let i = 0 ; i < number+1 ; i ++) {
    result += checking(i);
  }
  return result;
}

module.exports = problem3;
