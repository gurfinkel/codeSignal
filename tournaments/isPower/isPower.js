function isPower(n) {
    if (1 == n) {
        return true;
    }

    for (let i = 2; n >= i * i; ++i) {
        for (let j = i * i; n >= j; j *= i) {
            if (j == n) {
                return true;
            }
        }
    }

    return false;
}

    