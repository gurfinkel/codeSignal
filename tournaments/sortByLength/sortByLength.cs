string[] sortByLength(string[] inputArray) {
    return inputArray.OrderBy(a => a.Length).ToArray();
}
