function magicalWell(a, b, n) {
    let result = 0;

    while (n--) {
        result += a++ * b++;
    }

    return result;
}
