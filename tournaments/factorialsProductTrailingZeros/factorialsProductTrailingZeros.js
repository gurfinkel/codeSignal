function factorialsProductTrailingZeros(l, r) {
    var result = 0,
        last = 0;
        
    for (var i = 1; i <= r; i++) {
        var number = i;

        while (number % 5 === 0) {
            number /= 5;
            last++;
        }
        if (i >= l) {
            result += last;
        }
    }
    return result;
}
    