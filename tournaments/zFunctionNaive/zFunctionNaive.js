function zFunctionNaive(s) {
    const n = s.length;
    const result = Array(n).fill(0);

    for (let i = 0; n > i; ++i) {
        for (let j = i; n > j; ++j) {
            if (s[j] === s[result[i]]) {
                ++result[i];
            } else {
                break;
            }
        }
    }

    return result;
}
