function swapNeighbouringDigits(n) {
    const getDigits = function(a) {
        const result = [];

        while (0 < n) {
            result.unshift(n % 10);
            n = ~~(n / 10);
        }

        return result;
    };

    const digits = getDigits(n);

    for (let i = 0; digits.length - 1 > i; i+=2) {
        [digits[i], digits[i + 1]] = [digits[i + 1], digits[i]];
    }

    return parseInt(digits.join(''));
}
