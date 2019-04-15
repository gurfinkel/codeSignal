int magicalWell(int a, int b, int n) {
    var result = 0;

    while (0 < n) {
        result += a * b;
        ++a;
        ++b;
        --n;
    }

    return result;
}
