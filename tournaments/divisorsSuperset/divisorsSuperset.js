function divisorsSuperset(superset, n) {

    var isInSequence = function(sequence, elem) {
        for (var i = 0; i < sequence.length; i++) {
            if (superset[i] === elem) {
                return true;
            }
        }
        return false;
    };
  
    var res = 0;
  
    for (var i = 1; i <= n; i++) {
        var correct = true;
        for (var j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                if (!isInSequence(superset, j) || !isInSequence(superset, i / j)) {
                    correct = false;
                    break;
                }
            }
        }
        if (correct) {
            res++;
        }
    }
  
    return res;
}
    