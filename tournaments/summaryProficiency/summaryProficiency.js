function summaryProficiency(a, n, m) {
    let result = 0;

    for (let i = 0; 0 < n && a.length > i; ++i) {
        if (m <= a[i]) {
            result += a[i];
            --n;
        }
    }

    return result;
}
