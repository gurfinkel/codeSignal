int differentSubstrings(string inputString) {
    var store = new HashSet<string>();

    for (int i = 0; inputString.Length > i; ++i) {
        for (int j = 1; inputString.Length - i >= j; ++j) {
            store.Add(inputString.Substring(i, j));
        }
    }

    return store.Count;
}