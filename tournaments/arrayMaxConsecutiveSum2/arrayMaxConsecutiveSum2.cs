int arrayMaxConsecutiveSum2(int[] inputArray) {
    var result = int.MinValue;
    var max = 0;

    foreach (var item in inputArray) {
        result = Math.Max(result, max + item);
        max = Math.Max(0, max + item);
    }

    return result;
}
