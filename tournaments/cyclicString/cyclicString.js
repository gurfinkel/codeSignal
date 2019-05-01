function cyclicString(s) {
    const n = s.length;

    for (let i = 1; n >= i; ++i) {
        let a = s.substring(0, i);
        let b = 1;
        for (let j = 0; n > j; ++j)
            if (s[j] !== a[j % a.length]) {
                b = 0;
                break;
            }
        if (b) return i;
    }

    return 0;
}
