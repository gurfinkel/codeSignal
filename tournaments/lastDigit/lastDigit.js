function lastDigit(a, b) {
    if (0 === a + b || 0 === b) return 1;
    if (0 === a) return 0;
    return (Math.pow(a % 10, 0 === b % 4 ? 4 : b % 4)) % 10;
}
