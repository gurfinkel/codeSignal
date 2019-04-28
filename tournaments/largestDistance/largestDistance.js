function largestDistance(a) {
    const n = a.length;
    let result = 0;

    for (let i = 0; n > i; i += 2)
        for (let j = i + 2; n > j; j += 2)
            result = Math.max(result, Math.abs(a[i] - a[j]), Math.abs(a[i + 1] - a[j + 1]));

    return result;
}
