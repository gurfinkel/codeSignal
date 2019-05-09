function maxDivisor(left, right, divisor) {
    while (left <= right) {
        if (!(right%divisor)) return right;
        --right;
    }

    return -1;
}
