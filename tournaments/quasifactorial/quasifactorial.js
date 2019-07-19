function quasifactorial(n) {
    return 1 >= n ? 1 : (quasifactorial(n - 1) * n - 1);
}
