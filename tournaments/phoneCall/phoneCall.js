function phoneCall(min1, min2_10, min11, s) {
    let result = 0;
    let firstPart = 1;
    let secondPart = 9;

    while (0 < s) {
        if (0 < firstPart) {
            if (s >= min1) {
                ++result;
                --firstPart;
            }

            s -= min1;
        } else if (0 < secondPart) {
            if (s >= min2_10) {
                ++result;
                --secondPart;
            }

            s -= min2_10;
        } else {
            if (s >= min11) {
                ++result;
            }

            s -= min11;
        }
    }

    return result;
}
