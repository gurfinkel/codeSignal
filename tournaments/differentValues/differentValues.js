function differentValues(a, d) {
    const n = a.length;
    let result = -1;
    for (let i = 0; n > i; ++i)
        for (let j = i + 1; n > j; ++j)
            if (d >= Math.abs(a[i] - a[j])) result = Math.max(result, Math.abs(a[i] - a[j]));
    return result;
}
