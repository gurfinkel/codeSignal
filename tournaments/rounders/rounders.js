function rounders(n) {
    let a = 10;

    while (n > a) {
        if (5 > ~~((n % a) / ~~(a / 10))) {
            n = ~~(n / a) * a;
        } else {
            n = ~~(n / a + 1) * a;
        }

        a *= 10;
    }

    return n;
}
