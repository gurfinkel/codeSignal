bool isBeautifulString(string inputString) {
    if (null == inputString || 0 == inputString.Length) {
        return true;
    }

    var store = new int[26];
    var length = int.MinValue;

    foreach (Char letter in inputString) {
        ++store[letter - 'a'];
        length = Math.Max(length, letter - 'a');
    }

    var currentState = 0;
    for (int i = 0; length >= i; ++i) {
        if (0 == store[i]) {
            return false;
        }

        if (0 == currentState) {
            currentState = store[i];
            continue;
        }

        if (currentState < store[i]) {
            return false;
        } else {
            currentState = store[i];
        }
    }

    return true;
}
