function isOneSwapEnough(inputString) {
    const isP = function(a) {
        const n = a.length;

        for (let i = 0; n > i; ++i)
            if (a[i] !== a[n - i - 1]) return false;

        return true;
    };

    const a = [...inputString];
    const n = a.length;

    if (1 === n)
        return true;

    for (let i = 0; n > i; ++i)
        for (let j = 0; n > j; ++j) {
            [a[i], a[j]] = [a[j], a[i]];
            if (isP(a)) return true;
            [a[i], a[j]] = [a[j], a[i]];
        }

    return false;
}
