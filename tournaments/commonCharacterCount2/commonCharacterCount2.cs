int commonCharacterCount2(string[] s) {
    var n = s.Length;
    var store = new int[26][];
    var result = 0;

    for (var j = 0; 26 > j; ++j) {
        store[j] = new int[n];
    }

    for (var i = 0; n > i; ++i) {
        for (var j = 0; s[i].Length > j; ++j) {
            ++store[s[i][j] - 'a'][i];
        }
    }

    foreach (var item in store) {
        result += item.Min();
    }

    return result;
}
