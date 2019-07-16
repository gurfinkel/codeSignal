function countTinyPairs(a, b, k) {
    const n = a.length;
    let result = 0;

    for (let i = 0; n > i; ++i) {
        if (k > parseInt(a[i].toString() + b[n - 1 - i].toString())) ++result;
    }

    return result;
}
