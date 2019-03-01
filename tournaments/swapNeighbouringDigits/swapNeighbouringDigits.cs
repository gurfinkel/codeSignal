int swapNeighbouringDigits(int n) {
    var digits = getDigits(n);

    for (int i = 0; digits.Count - 1 > i; i += 2) {
        var temp = digits[i];
        digits[i] = digits[i + 1];
        digits[i + 1] = temp;
    }

    return int.Parse(String.Join("", digits));
}

List<int> getDigits(int n) {
    var result = new List<int>();

    while (0 < n) {
        result.Add(n % 10);
        n /= 10;
    }

    result.Reverse();

    return result;
}
