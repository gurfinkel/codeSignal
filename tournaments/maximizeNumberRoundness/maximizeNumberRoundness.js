function maximizeNumberRoundness(n) {
    let tmp = n;
    let zeros = 0;
    let result;

    while (tmp) {
        if (0 === tmp % 10) {
            ++zeros;
        }
        tmp = Math.floor(tmp / 10);
    }

    result = zeros;

    for (var i = 0; zeros > i; ++i) {
        if (0 === n % 10) {
            --result;
        }

        n = Math.floor(n / 10);
    }
    
    return result;
}
