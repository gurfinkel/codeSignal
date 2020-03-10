bool sumOfTwo(int[] a, int[] b, int v) {
    var store = new HashSet<int>();

    for (int i = 0; a.Length > i; ++i) {
        var diff = v - a[i];
        if (!store.Contains(diff)) {
            store.Add(diff);
        }
    }

    for (int j = 0; b.Length > j; ++j) {
       if(store.Contains(b[j])) {
          return true;
       }
    }

    return false;
}
