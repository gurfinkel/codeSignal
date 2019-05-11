function digitalSumSort(a) {
    const getSum = function(n) {
        let r = 0;

        while (0 < n) {
            r += n % 10;
            n = ~~(n / 10);
        }

        return r;
    };

    return a.sort((a, b) => {if (getSum(a) === getSum(b)) return a - b; else return getSum(a) - getSum(b)});
}
