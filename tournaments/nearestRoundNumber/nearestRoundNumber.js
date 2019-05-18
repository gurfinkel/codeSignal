function nearestRoundNumber(value) {
    if (!(value % 10)) return value;
    return 10 + value - value % 10;
}
