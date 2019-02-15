function specialNumbers(l, r) {

  var ans = 0;
  for (var i = l; i <= r; i++) {
    var digits = i.toString();
    var ok = true;
    for (var j = 0; j < Math.floor((digits.length + 1) / 2); j++) {
      if (digits[j] === '6' || digits[j] === '9') {
        ok &= digits[digits.length - 1 - j].charCodeAt() === ('9' - digits[j]) + '6'.charCodeAt();
      } else if ( digits[j] === '0' || digits[j] === '8' ) {
        ok &= digits[j] === digits[digits.length - 1 - j];
      } else {
        ok = false;
      }
    }
    if (ok) {
      ans++;
    }
  }

  return ans;
}
