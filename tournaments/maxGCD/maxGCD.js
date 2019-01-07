function maxGCD(sequence) {
    var gcd = function(a, b) {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    };
  
    var bestRes = 0;
  
    for (var i = 0; i < sequence.length; i++) {
      var result = sequence[0];
      if (i === 0) {
        result = sequence[1];
      }
      for (var j = 0; j < sequence.length; j++) {
        if (i === j) {
          continue;
        }
        result = gcd(result, sequence[j]);
      }
      if (result > bestRes) {
        bestRes = result;
      }
    }
  
    return bestRes;
  }