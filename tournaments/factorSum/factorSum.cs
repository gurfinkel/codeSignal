int factorSum(int n) {
    var prev = 0;
    var curr = 0;
    var next = n;

    do {
        var tmp = 2;
        curr = next;
        prev = next;
        next = 0;
        while (tmp * tmp <= curr) {
            if (0 == curr % tmp) {
                curr /= tmp;
                next += tmp;
            } else {
                ++tmp;
            }
        }
        next += curr;
    } while (next != prev);

    return next;
}
