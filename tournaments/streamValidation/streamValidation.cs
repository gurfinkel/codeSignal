bool streamValidation(int[] stream) {
    var i = 0;
    var num = 0;
    var count = 0;
    var n = stream.Length;

    while (i < n) {
        count = 0;
        num = stream[i];

        while (0 < (num & 1 << (7 - count))) {
            ++count;
        }

        if (0 == count) {
            ++i;
            continue;
        }

        if (1 == count || 5 <= count || n < i + count) {
            return false;
        }

        for (var k = 1; count > k; ++k) {
            if (0 == (stream[i + k] & 1 << 7) || 1 == (stream[i + k] & 1 << 6)) {
                return false;
            }
        }

        i += count;
    }

    return true;
}
