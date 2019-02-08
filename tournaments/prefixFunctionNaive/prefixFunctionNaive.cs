int[] prefixFunctionNaive(string s) {
    var n = s.Length;
    var result = new int[n];
    var index = 1;
    var lastPrefixLength = 0;

    while (n > index) {
        if (s[index] == s[lastPrefixLength]) {
            result[index++] = ++lastPrefixLength;
        } else {
            if (0 == lastPrefixLength) {
                result[index++] = lastPrefixLength;
            } else {
                lastPrefixLength = result[lastPrefixLength - 1];
            }
        }
    }

    return result;
}
