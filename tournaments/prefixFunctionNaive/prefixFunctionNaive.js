function prefixFunctionNaive(s) {
    const n = s.length;
    const result = new Array(n).fill(0);
    let index = 1;
    let lastPrefixLength = 0;

    while (n > index) {
        if (s[index] === s[lastPrefixLength]) {
            result[index++] = ++lastPrefixLength;
        } else {
            if (!lastPrefixLength) {
                result[index++] = lastPrefixLength;
            } else {
                lastPrefixLength = result[lastPrefixLength - 1];
            }
        }
    }

    return result;
}
