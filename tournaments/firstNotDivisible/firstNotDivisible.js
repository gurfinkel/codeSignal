function firstNotDivisible(divisors, start) {
    while (true) {
        let count = divisors.reduce((a, b) => (start % b) ? a : ++a, 0);
        if (count) ++start;
        else return start;
    }
}
  