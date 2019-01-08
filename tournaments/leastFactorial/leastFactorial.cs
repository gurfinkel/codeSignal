int leastFactorial(int n) {
    var result = 1;
    var index = 1;
    
    while (n > result) {
        result *= index;
        ++index;
    }
    
    return result;
}
