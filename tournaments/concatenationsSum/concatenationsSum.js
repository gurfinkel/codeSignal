function concatenationsSum(a) {
  const getInt = function(num) {
    const zeroCode = '0'.charCodeAt();
    let r = 0;
    for (let i = 0; num.length > i; ++i) {
      r *= 10;
      r += num.charCodeAt(i) - zeroCode;
    }
    return r;
  };

  const getStr = function(num) {
    const r = [];
    while (0 < num) {
      r.unshift(num % 10);
      num = ~~(num/10);
    }
    return r.join('');
  };

  const n = a.length;
  let result = 0;

  for (let i = 0; n > i; ++i) {
    const iString = getStr(a[i]);
    result += getInt(iString + iString);
    for (let j = 1 + i; n > j; ++j) {
      const jString = getStr(a[j]);
      result += getInt(iString + jString);
      result += getInt(jString + iString);
    }
  }

  return result;
}
