string addDigits(int a, int b, int n) {
    var number = a % b;
    var sb = new StringBuilder();

    sb.Append(a);

    for (int i = 0; n > i; ++i) {
        var nextDigit = -1;
        for (var digit = 9; 0 <= digit; --digit) {
            if (0 == (10 * number + digit) % b) {
                nextDigit = digit;
                break;
            }
        }
        if (-1 == nextDigit) {
            break;
        }
        sb.Append(nextDigit);
        number = (10 * number + nextDigit) % b;
    }

    return sb.ToString();
}
