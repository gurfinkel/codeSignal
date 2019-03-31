bool isTandemRepeat(string inputString) {
    if (1 == (inputString.Length & 1)) {
        return false;
    }

    for (int i = 0; inputString.Length / 2 > i; ++i) {
        if (inputString[i] != inputString[inputString.Length / 2 + i]) {
            return false;
        }
    }

    return true;
}
