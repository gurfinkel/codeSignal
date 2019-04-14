function reversedSumOfDigits(p, n) {
    if (!p && 1 === n) return '0';
    if (9 * n < p || !p) return '-1';

    const result = [];
    for (let i = 0; n - 1 > i; ++i) {
        const a = 9 < (p - 1) ? 9 : (p - 1);
        p -= a;
        result.unshift(a);
    }
    return p + result.join('');
}
