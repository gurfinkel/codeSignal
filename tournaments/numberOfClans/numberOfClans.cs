int numberOfClans(int[] divisors, int k) {
    var store = new HashSet<string>();

    for (int i = 1; k >= i; ++i) {
        var newStringBuilder = new StringBuilder();
        foreach (int item in divisors) {
            if (0 == i % item) {
                newStringBuilder.Append(item);
            }
        }

        var newString = newStringBuilder.ToString();
        if (!store.Contains(newString)) {
            store.Add(newString);
        }
    }

    return store.Count;
}
