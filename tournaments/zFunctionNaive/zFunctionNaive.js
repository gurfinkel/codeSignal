function zFunctionNaive(s) {
    const n = s.length;
    const result = [];

    for (let i = 0; n > i; ++i) {
        result.push(0);
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
