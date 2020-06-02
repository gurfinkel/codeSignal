function goodStringsCount(len) {
    function factorial(n) {
        if ( n < 2 )
            return 1;

        for ( var i = n-1; i > 1; i-- )
            n *= i;

        return n;
    }

    var f0 = 2 ** len - len - 1, f1 = factorial(26), f2 = factorial(len), f3 = factorial(26-len);

    return (f0 * f1) / (f2 * f3) | 0;
}
