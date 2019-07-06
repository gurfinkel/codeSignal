bool pairOfShoes(int[][] shoes) {
    var store = new Dictionary<int, int>();
    var result = 0;

    for (int i = 0; shoes.Length > i; ++i) {
        if (store.ContainsKey(shoes[i][1])) {
            store[shoes[i][1]] += (0 == shoes[i][0] ? -1 : 1);
        } else {
            store.Add(shoes[i][1], (0 == shoes[i][0] ? -1 : 1));
        }
    }

    foreach (var item in store.ToList()) {
        if (0 != item.Value) {
            return false;
        }
    }

    return true;
}
