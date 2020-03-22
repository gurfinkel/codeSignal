function digitalSumSort(a) {
    const getSum = function(n) {
        let r = 0;

        while (0 < n) {
            r += n % 10;
            n = ~~(n / 10);
        }

        return r;
    };

    return a.sort((a, b) => (getSum(a) === getSum(b)) ? a - b : getSum(a) - getSum(b));
}
