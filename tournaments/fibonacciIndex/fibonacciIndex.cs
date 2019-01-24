int fibonacciIndex(int n) {
    var result = 0;
    var a = 0;
    var b = 1;
    var count = 1;
    
    while (count < n) {
        var c = a + b;
        a = b;
        b = c;
        count = getDigitsCount(a);
        ++result;
    }
    
    return result;
}

int getDigitsCount(int n) {
    var result = 0;
    
    while (0 < n) {
        ++result;
        n /= 10;
    }
    
    return result;
}