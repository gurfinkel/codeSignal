int secondRightmostZeroBit(int n) {
    return (((((n + 1) | n) + 1) | n) - n);
}
