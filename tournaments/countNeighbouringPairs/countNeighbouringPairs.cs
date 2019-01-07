int countNeighbouringPairs(string inputString) {
    var result = 0;

    for (int i = 0; inputString.Length > i + 1; ++i) {
        if (inputString[i] == inputString[i + 1]) {
            ++result;
        }
    }

    return result;
}
