int strstr(string haystack, string needle) {
    var N = haystack.Length;
    var L = needle.Length;

    if (N < L)
        return -1;

    // base value for the rolling hash function
    long a = 256;
    // modulus value for the rolling hash function to avoid overflow
    long modulus = 1000000007;

    // compute the hash of strings haystack[:L], needle[:L]
    long h = 0;
    long ref_h = 0;

    // const value to be used often : a**L % modulus
    long aL = 1;
    var slidingWindow = new Queue<char>();

    for (var i = 0; L > i; ++i) {
        h = (h * a + haystack[i]) % modulus;
        ref_h = (ref_h * a + needle[i]) % modulus;
        aL = (aL * a) % modulus;
        slidingWindow.Enqueue(haystack[i]);
    }

    if (h == ref_h && needle == string.Join("", slidingWindow)) {
        return 0;
    }

    for (var start = 1; N - L + 1 > start; ++start) {
        // compute rolling hash in O(1) time
        h = (h * a - haystack[start - 1] * aL + haystack[start + L - 1]) % modulus;

        slidingWindow.Dequeue();
        slidingWindow.Enqueue(haystack[start + L - 1]);

        if (0 > h) {
            h += modulus;
        }

        if (h == ref_h && needle == string.Join("", slidingWindow)) {
            return start;
        }
    }

    return -1;
}
