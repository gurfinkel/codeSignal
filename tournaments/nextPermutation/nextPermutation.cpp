function nextPermutation(permutation) {

  for (var i = permutation.length - 2; i >= 0; i--) {
    if (permutation[i] < permutation[i + 1]) {
      var index = i + 1,
          t = permutation[i],
          suffix = [];
      for (var j = i + 1; j < permutation.length; j++) {
        if (permutation[j] > permutation[i] && permutation[j] < permutation[index]) {
          index = j;
        }
      }
      permutation[i] = permutation[index];
      permutation[index] = t;
      suffix = permutation.slice(i + 1);
      suffix.reverse();
      permutation = permutation.slice(0, i + 1).concat(suffix);
      return permutation;
    }
  }

  var compare = function(a, b) {
    return a - b;
  }

  permutation.sort(compare);
  return permutation;
}
