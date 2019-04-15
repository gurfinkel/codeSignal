int firstMultiple2(int[] divisors, int start) {
    return divisors.Min(x => (x-start%x)%x) + start;
}