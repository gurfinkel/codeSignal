function numberOfOperations(a, b) {
    if (a > b) [a, b] = [b, a];

    return b % a ? 0 : 1 + numberOfOperations(a, b / a);
}
