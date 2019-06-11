function isSumOfConsecutive(n) {
    for (let i = 1; n > i; ++i) {
        let a = n;
        let b = i;
        while (0 < a) a -= b++;
        if (!a) return true;
    }

    return false;
}
