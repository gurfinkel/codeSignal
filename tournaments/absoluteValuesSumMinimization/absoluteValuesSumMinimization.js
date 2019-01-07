function absoluteValuesSumMinimization(a) {
    var indexOfMinimum = -1;
    var minimalSum = Number.MAX_VALUE;
  
    for (var i = 0; i < a.length; i++) {
      var sum = 0;
      for (var j = 0; j < a.length; j++) {
        sum += Math.abs(a[j] - a[i]);
      }
      if (sum < minimalSum) {
        minimalSum = sum;
        indexOfMinimum = i;
      }
    }
  
    return a[indexOfMinimum];
  }