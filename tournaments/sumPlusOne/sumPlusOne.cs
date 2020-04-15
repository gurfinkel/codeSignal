int[] sumPlusOne(int sn) {
    // DigitSum(n+1) = DigitSum(n) + 1 - (9 * NumberOfEndingZeros(n+1))
    // n = 56,  DigitSum(n) = 11, DigitSum(n+1) = 11 + 1 - 9 * 0 = 12;
    // n = 119, DigitSum(n) = 11, DigitSum(n+1) = 11 + 1 - 9 * 1 = 3;

    var result = new Stack<int>();
    var numberOfEndingZeros = 0;
    var next = 1 + sn - 9 * numberOfEndingZeros++;

    while (0 < next) {
        result.Push(next);
        next = 1 + sn - 9 * numberOfEndingZeros++;
    }

    return result.ToArray();
}
