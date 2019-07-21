function maxMultiple(divisor, bound) {
    while (0 < bound) {
        if (!(bound % divisor)) return bound;
        --bound;
    }
}
