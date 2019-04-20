function increaseNumberRoundness(n) {
    let a = 0;
    let b = 0;

    while (0 < n) {
        let c = n % 10;
        n = ~~(n / 10);

        if (!c) {
            if (b) a = true;
        } else {
            if (a) return true;
            else b = true;
        }
    }

    return false;
}
