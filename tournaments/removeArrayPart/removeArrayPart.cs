int[] removeArrayPart(int[] inputArray, int l, int r) {
    List<int> result = new List<int>();

    for (int i = 0; inputArray.Length > i; ++i) {
        if (l > i || r < i) {
            result.Add(inputArray[i]);
        }
    }

    return result.ToArray();
}
