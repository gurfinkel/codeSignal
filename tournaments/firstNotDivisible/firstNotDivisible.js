function firstNotDivisible(divisors, start) {
    while (true) {
        let count = divisors.reduce((a, b) => (start % b) ? a : ++a, 0);
        if (count) ++start;
        else return start;
    }
}

function firstNotDivisible(divisors, start) {

    for (var answer = start; ; answer++) {
        var correct = true;
        for (var i = 0; i < divisors.length; i++) {
            if (answer % divisors[i] === 0) {
                correct = false;
                break;
            }
        }
        if (correct) {
            return answer;
        }
    }
}  
  