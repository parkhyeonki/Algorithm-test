function binary(n) {
  let ret = [];
  let bin = [0, 1];
  while (n !== 0) {
    let tmp = n % 2;
    n = parseInt(n / 2);
    ret.push(tmp === 0 ? bin[0] : bin[1]);
  }
  return ret.reverse();
}

binary(3);
