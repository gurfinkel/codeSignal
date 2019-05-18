function combs(comb1, comb2) {
    const getMask = function(comb) {
        let mask = 0;
        for (const item of comb) {
            mask <<= 1;
            mask += '*' === item;
        }

        return mask;
    };

    const m1 = getMask(comb1);
    const m2 = getMask(comb2);
    const len1 = comb1.length;
    const len2 = comb2.length;
    let result = len1 + len2;

    for (let i = -len1; len2 >= i; ++i) {
        let a = 0;
        let b = 0;

        if (0 > i) {
            a = m2 << (-i) & m1;
            b = Math.max(-i + len2, len1);
        } else {
            a = m1 << i & m2;
            b = Math.max(i + len1, len2);
        }
        if (!a && result > b) {
            result = b;
        }
    }

    return result;
}
