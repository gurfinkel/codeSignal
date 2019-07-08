function arrayCenter(a) {
    const result = [];
    const n = a.length;
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; n > i; ++i) {
        sum += a[i];
        min = Math.min(min, a[i]);
    }

    for (let i = 0; n > i; ++i)
        if (Math.abs(n * a[i] - sum) < n * min)
            result.push(a[i]);

    return result;
}
