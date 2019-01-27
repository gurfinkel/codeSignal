function factorizedGCD(a, b) {
    var j = 0,
        result = 1;
    for (var i = 0; i < a.length; i++) {
        while (j < b.length && a[i] > b[j]) {
            j++;
        }
        if (j < b.length && a[i] === b[j]) {
            result *= a[i];
            j++;
        }
    }
    return result;
}
  