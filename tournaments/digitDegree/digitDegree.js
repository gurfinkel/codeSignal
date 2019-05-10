function digitDegree(n) {
    const getSumOfDigits = function(a) {
        let r = 0;

        while (0 < a) {
            r += a % 10;
            a = ~~(a / 10);
        }

        return r;
    };

    let result = 0;

    while (10 <= n) {
        n = getSumOfDigits(n);
        ++result;
    }

    return result;
}
