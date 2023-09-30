function problem2(cryptogram) {
  var answer;
  let prev = cryptogram

  while (cryptogram.length > 0) {
    for ( let i = 0 ; i < cryptogram.length-1; i ++) {
      if (cryptogram[i] == cryptogram[i+1]) {
        const remove = cryptogram[i] + cryptogram[i+1];
        cryptogram = cryptogram.replace(remove,'');
      }
    }
    if (prev == cryptogram) break;
    prev = cryptogram;
  }
  return cryptogram
}

module.exports = problem2;
