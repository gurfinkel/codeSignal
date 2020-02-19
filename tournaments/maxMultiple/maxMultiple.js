function maxMultiple(divisor, bound) {
    while (bound) {
        if (!(bound % divisor)) {
            return bound;
        }

        --bound;
    }
}
