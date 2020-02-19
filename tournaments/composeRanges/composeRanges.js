function composeRanges(nums) {
    if (!nums || !nums.length) {
        return [];
    }

    const result = [];
    let left = 0;
    let right = 0;

    for (let i = 1; nums.length >= i; ++i) {
        if (i < nums.length && 1 === nums[i] - nums[i - 1]) {
            ++right;
        } else {
            result.push(left < right ? `${nums[left]}->${nums[right]}` : `${nums[left]}`);
            left = i;
            right = i;
        }
    }

    return result;
}
