int countVowelConsonant(string s) {
    var result = 0;
    var store = new HashSet<char> {'a', 'e', 'i', 'o', 'u'};

    foreach (var letter in s) {
        if (store.Contains(letter)) {
            ++result;
        } else {
            result += 2;
        }
    }

    return result;
}
