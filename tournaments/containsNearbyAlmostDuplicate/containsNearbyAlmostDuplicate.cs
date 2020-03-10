bool containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
    var n = nums.Length;

    for (var i = 0; n - 1 > i; ++i) {
        for (var j = 1 + i; n > j; ++j) {
            if (k >= j - i && t >= Math.Abs((long)nums[i] - nums[j])) {
                return true;
            }
        }
    }

    return false;
}
