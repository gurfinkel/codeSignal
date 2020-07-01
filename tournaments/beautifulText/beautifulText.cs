bool beautifulText(string inputString, int l, int r) {
    var n = inputString.Length;

    for (int i = l + 1; r + 1 >= i; ++i) {
        if (0 == i || 0 != (n + 1) % i) {
            continue;
        }

        var index = i;

        while (n > index) {
            if (' ' == inputString[index - 1]) {
                index += index;
            } else {
                break;
            }
        }

        if (n < index) {
            return true;
        }
    }

    return false;
}
