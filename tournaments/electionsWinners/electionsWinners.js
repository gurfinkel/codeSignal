function electionsWinners(votes, k) {
    let max = Number.MIN_SAFE_INTEGER;
    let maxCount = 0;

    for (const item of votes) {
        if (max < item) {
            max = item;
            maxCount = 1;
        } else if (max === item) ++maxCount;
    }

    if (!k && 1 < maxCount) return 0;

    let result = 0;

    for (const item of votes)
        if ((0 < k && item + k > max) || (max === item))
            ++result;

    return result;
}
