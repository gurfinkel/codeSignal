bool isPangram(string sentence) {
    var store = new bool[26];

    foreach (var item in sentence) {
        if (char.IsLower(item)) {
            store[item - 'a'] = true;
        } else if (char.IsUpper(item)) {
            store[item - 'A'] = true;
        }
    }

    foreach (var item in store) {
        if (!item) {
            return false;
        }
    }

    return true;
}
