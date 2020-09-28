int sumInRange(int[] nums, int[][] queries) {
    if (0 == nums.Length || 0 == queries.Length) {
        return 0;
    }

    var n = nums.Length;
    var store = new long[n];
    long sum = 0;

    for (int i = 0; n > i; ++i) {
        sum += nums[i];
        store[i] = sum;
    }

    var mod = 1000000007;
    long result = 0;
    foreach (var item in queries) {
        var a = store[item[1]];
        var b = 0 < item[0] ? store[item[0] - 1] : 0;
        result += ((a - b) % mod);
    }

    return (int)(0 <= (result % mod) ? (result % mod) : mod + (result % mod));
}
