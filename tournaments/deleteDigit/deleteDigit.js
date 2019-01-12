function deleteDigit(n) {
    var answer = 0,
        digits = [];

    while (n) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }

    for (var deletedIndex = 0; deletedIndex < digits.length; deletedIndex++) {
        var number = 0;
        for (var i = digits.length - 1; i >= 0; i--) {
            if (i !== deletedIndex) {
                number = number * 10 + digits[i];
            }
        }
        answer = Math.max(answer, number);
    }
    
    return answer;
}
