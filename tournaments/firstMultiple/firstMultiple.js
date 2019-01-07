function firstMultiple(divisors, start) {

    for (var answer = start; ; ++answer) {
        var correct = true;
        for (var i = 0; divisors.length > i; ++i) {
            if (answer % divisors[i]) {
                correct = false;
                break;
            }
        }
        
        if (correct) {
            return answer;
        }
    }
}
    