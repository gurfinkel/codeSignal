function goodStringsCount(len) {
    const factorial = function(n) {
        if (2 > n) {
            return 1;
        }
        
        for (let i = n - 1; 1 < i; --i) {
            n *= i;
        }
        
        return n;
    };
    
    const f0 = 2 ** len - len - 1 ;
    const f1 = factorial(26);
    const f2 = factorial(len);
    const f3 = factorial(26 - len);
    
    return (f0 * f1) / (f2 * f3) | 0;
}
