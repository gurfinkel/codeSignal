function countWaysToChangeDigit(value) {
    let result = 0;

    while (0 < value) {
        result += (9 - value % 10);
        value = Math.floor(value / 10);
    }

    return result;
}
