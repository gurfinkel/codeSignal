string addDigits(int a, int b, int n) {
    var number = a % b;
    var result = new StringBuilder();
    result.Append(a);
    
    for (int i = 0; n > i; ++i) {
        var nextDigit = -1;
        for (var digit = 9; 0 <= digit; --digit) {
            if (0 == (number * 10 + digit) % b) {
                nextDigit = digit;
                break;
            }
        }
        if (-1 == nextDigit) {
            break;
        }
        result.Append(nextDigit);
        number = (number * 10 + nextDigit) % b;
    }
    
    return result.ToString();
}
