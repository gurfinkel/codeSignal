function smallestMultiple(left, right) {
    for (let i = 1;; ++i) {
        let a = 1;
        for (let j = left; right >= j; ++j)
            if (i % j) {
                a = 0;
                break;
            }
        if (a) return i;
    }
}
