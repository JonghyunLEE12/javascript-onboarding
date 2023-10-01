function problem5(money) {
  var answer;

  const translate = (money) => {
    const lst = [];
    const currency = [50000,10000,5000,1000,500,100,50,10,1];
    for (let cur of currency) { 
      lst.push(parseInt(money / cur));
      money = money % cur;
    }
   return lst
  };
  return translate(money);
}

module.exports = problem5;
