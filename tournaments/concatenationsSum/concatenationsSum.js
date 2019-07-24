function concatenationsSum(a) {
  const n = a.length;
  let sum = a.reduce((total, item) => total + item, 0);
  let result = 0;

  for (let i = 0; n > i; ++i) {
    result += a[i] * n + sum * (10 ** (a[i].toString().length));
  }

  return result;
}
