function comfortableNumbers(l, r) {
    const getSumOfDigits = function(n) {
        let r = 0;
        while (n) {
            r += n % 10;
            n = ~~(n / 10);
        }
        return r;
    };

    let result = 0;

    for (let i = l; r >= i; ++i) {
        const a = getSumOfDigits(i);
        for (let j = i + 1; Math.min(i + a, r) >= j; ++j) {
            const b = getSumOfDigits(j);

            if (i >= j - b)
                ++result;
        }
    }

    return result;
}
