function smallestMultiple(left, right) {
    let res = 1;

    do {
        if (res % right) {
            res *= right
        }
    } while (left < right--);

    return res;
}
