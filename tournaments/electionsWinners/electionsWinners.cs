int electionsWinners(int[] votes, int k) {
    var max = int.MinValue;
    var maxCount = 0;

    foreach (int item in votes) {
        if (max < item) {
            max = item;
            maxCount = 1;
        } else if (max == item) {
            ++maxCount;
        }
    }

    if (0 == k && 1 < maxCount) {
        return 0;
    }

    var result = 0;

    foreach (int item in votes) {
        if ((0 < k && item + k > max) || (item == max)) {
            ++result;
        }
    }

    return result;
}
