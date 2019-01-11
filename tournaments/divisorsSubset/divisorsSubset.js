function divisorsSubset(subset, n) {

    var res = 0;
  
    for (var i = 1; i <= n; i++) {
        var correct = true;
        for (var j = 0; j < subset.length; j++) {
            if (i % subset[j] !== 0) {
            correct = false;
            }
        }
        if (correct) {
            res++;
        }
    }
  
    return res;
}
    