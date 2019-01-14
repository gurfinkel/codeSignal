int countInversionsNaive(int[] inputArray) {
    int result = 0;

    for (int i = 0; inputArray.Length > i; ++i) {
        for (int j = i + 1; inputArray.Length > j; ++j) {
            if (inputArray[i] > inputArray[j]) {
                ++result;
            }
        }
    }
    return result;
}
