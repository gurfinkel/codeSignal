function prefixSums(a) {
    const n = a.length;
    const result = new Array(n);
    result[0] = a[0];

    for (let i = 1; n > i; ++i) {
        result[i] = a[i] + result[i - 1];
    }

    return result;
}
