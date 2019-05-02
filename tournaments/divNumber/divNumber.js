function divNumber(k, l, r) {
    let result = 0;

    for (let i = l; r >= i; ++i) {
        let a = i;
        let b = 1;
        let c = 2;

        while (a >= c**2) {
            let d = 0;
            while (!(a % c)) {
                a = ~~(a/c);
                ++d;
            }
            b *= d + 1;
            if (k < b) break;
            ++c;
        }
        if (1 < a) b *= 2;
        if (k === b) ++result;
    }

    return result;
}
