function differentValuesInMultiplicationTable(n, m) {
    let result = 0;

    for (let i = 1; n * m >= i; ++i)
        for (let j = 1; Math.min(n, m) >= j; ++j)
            if (Math.max(n, m) >= i / j && !(i % j)) {
                ++result;
                break;
            }

    return result;
}
