function mutateTheArray(n, a) {
    const b = new Array(n);

    for (let i = 0; n > i; ++i) {
        b[i] = a[i];
        if (1 <= i) b[i] += a[i - 1];
        if (n - 1 > i) b[i] += a[i + 1];
    }

    return b;
}
