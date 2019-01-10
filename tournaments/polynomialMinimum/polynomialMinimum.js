function polynomialMinimum(coeffs, interval) {
  var f = function(x) {
    var res = 0;
    for (var i = 0; i < coeffs.length; i++) {
      res = res * x + coeffs[i];
    }
    return res;
  }

  var l = interval[0];
  var r = interval[1];

  while (r - l >= 3) {
    var m1 = l + Math.floor((r - l) / 3);
    var m2 = r - Math.floor((r - l) / 3) ;
    if (f(m1) > f(m2)) {
      l = m1;
    }
    else {
      r = m2;
    }
  }

  var res = f(l);
  while (l <= r) {
    if (f(l) < res) {
      res = f(l);
    }
    l++;
  }

  return res;
}
