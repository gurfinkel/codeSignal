function quasifactorial(n) {
    if (1 >= n) {
        return 1;
    }

    return (quasifactorial(n - 1) * n - 1);
}
