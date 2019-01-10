int kthDigit(int n, int k) {
    var numDigits = 0;
    var number = n;

    while (0 < number) {
        ++numDigits;
        number /= 10;
    }
    
    int indexFromLast = numDigits - k + 1;
    
    while (0 < n) {
        if (--indexFromLast == 0) {
            return n % 10;
        }

        n /= 10;
    }
    
    return -1;
}
