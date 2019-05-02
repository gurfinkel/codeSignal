function maxZeros(n) {
    let result = 0;
    let a = 0;

    for (let i = 2; n >= i; ++i) {
        let b = 0;
        let c = n;

        while (0 < c) {
            if (!(c % i)) ++b;
            c = ~~(c/i);
        }

        if (b > a) {
            a = b;
            result = i;
        }
    }

    return result;
}
