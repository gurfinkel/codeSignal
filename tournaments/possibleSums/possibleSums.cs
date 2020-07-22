int possibleSums(int[] coins, int[] quantity) {
    var n = coins.Length;
    var store = new HashSet<int>() {0};

    for (int i = 0; n > i; ++i) {
        List<int> a = store.ToList();

        foreach (var sum in a) {
           for (var j = 1; quantity[i] >= j; ++j) {
              store.Add(sum + j * coins[i]);
           }
        }
    }

    return store.Count - 1;
}
