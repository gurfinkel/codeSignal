int numberOfEvenDigits(int n) {
    var result = 0;
    
    while (0 < n) {
        var next = n % 10;
        if (0 == (next & 1)) {
            ++result;
        }
        n /= 10;
    }
    
    return result;
}
