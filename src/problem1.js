function problem1(pobi, crong) {
  var answer;
  
  const validate = (page) => {
    const checking = page[1]-page[0];
    if (checking == 1) return true;
    return false;
  }

  const plusNumber = (number) => {
    number = String(number).split('');
    let sum = 0;
    number.map((num) => sum += parseInt(num));
    return sum
  }
  const multiplyNumber = (number) => {
    number = String(number).split('');
    let multi = 1;
    number.map((num) => multi *= parseInt(num))
    return multi
  }
  
  const calc = (page) => {
    const pageLeft = page[0];
    const pageRight = page[1];
    const plusMax = Math.max(multiplyNumber(pageLeft),multiplyNumber(pageRight))
    const multiMax = Math.max(plusNumber(pageLeft),plusNumber(pageRight))
    return Math.max(plusMax,multiMax);
  }

  if (!(validate(pobi) && validate(crong))) return -1
  const pobiNumber = calc(pobi)
  const crongNumber = calc(crong)

  if (pobiNumber > crongNumber) return 1
  if (pobiNumber < crongNumber) return 2
  if (pobiNumber == crongNumber) return 0
  
}

module.exports = problem1;
