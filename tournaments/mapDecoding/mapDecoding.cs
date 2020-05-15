int mapDecoding(string digits) {
    if (null == digits) {
        return 0;
    }

    if (0 == digits.Length) {
        return 1;
    }

    if ('0' == digits[0]) {
        return 0;
    }

    if (1 == digits.Length) {
        return 1;
    }

    var n = digits.Length;
    var count = new int[n+1]; // A table to store results of subproblems
    count[0] = 1;
    count[1] = 1;

    for (int i = 2; n >= i; ++i) {
        count[i] = 0;

        // If the last digit is not 0, then last digit must add to
        // the number of words
        if (digits[i-1] > '0') {
            count[i] = count[i-1] % 1000000007;
        }

        // If second last digit is smaller than 2 and last digit is
        // smaller than 7, then last two digits form a valid character
        if (digits[i-2] == '1' || (digits[i-2] == '2' && digits[i-1] < '7') ) {
            count[i] += count[i-2] % 1000000007;
        }
    }

    return count[n] % 1000000007;
}
