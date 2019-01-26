function nextPrime(n){

    for (var i = n + 1; ; i++) {
        var isPrime = true;
        for (var divisor = 2; divisor * divisor <= i; divisor++) {
            if (i % divisor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }
}
    