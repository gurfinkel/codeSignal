function longestSequence(a) {
    const n = a.length;
    let result = 1;

    for (let i = 0; n > i; ++i) {
        for (let j = i + 1; n > j; ++j) {
            let d = a[j] - a[i];
            if (!d) continue;
            let b = 1;
            let c = a[i];
            for (let k = j; n > k; ++k) {
                if (a[k] - c === d) {
                    ++b;
                    c = a[k];
                }
            }
            result = Math.max(result, b);
        }
    }

    return result;
}