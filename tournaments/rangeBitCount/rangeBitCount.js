function rangeBitCount(a, b) {
    let result = 0;

    while (a <= b) {
        let c = a++;

        while (c) {
            result += c & 1;
            c >>= 1;
        }
    }

    return result;
}
