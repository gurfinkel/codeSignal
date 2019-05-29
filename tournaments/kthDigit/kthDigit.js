function kthDigit(n, k) {
    const b = n.toString().length;
    let a = b - k + 1;

    while (0 < n) {
        if (!--a) return n % 10;
        n = ~~(n/10);
    }

    return -1;
}
