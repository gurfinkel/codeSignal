function containsCloseNums(nums, k) {
    const store = {};

    for (let i = 0; i in nums; ++i) {
        if (nums[i] in store) {
            if (k >= i - store[nums[i]]) {
                return true;
            } else {
                store[nums[i]] = i;
            }
        } else {
            store[nums[i]] = i;
        }
    }

    return false;
}
