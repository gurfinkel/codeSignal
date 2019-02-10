string[] isDivisibleBy3(string inputString) {
    var result = new List<string>();
    var sumOfDigits = 0;

    for (int i = 0; inputString.Length > i; ++i) {
        if ('*' != inputString[i]) {
            sumOfDigits += inputString[i] - '0';
        }
    }

    for (var i = 0; 10 > i; ++i) {
        var digit = 0 == sumOfDigits % 3 ? i : i - 1;
        if (digit % 3 == sumOfDigits % 3) {
            result.Add(inputString.Replace('*', (char)('0' + i)));
        }
    }

    return result.ToArray();
}
