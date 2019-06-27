function firstMultiple2(divisors, start) {
    while (true) {
        for (const item of divisors) {
            if (!(start % item)) return start;
        }
        ++start;
    }
}
