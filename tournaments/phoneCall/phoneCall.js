function phoneCall(min1, min2_10, min11, s) {

    if (s < min1) {
        return 0;
    }

    for (var i = 2; i <= 10; i++) {
        if (s < min1 + min2_10 * (i - 1)) {
            return i - 1;
        }
    }

    return Math.floor((s - min1 - min2_10 * 9) / min11) + 10;
}
