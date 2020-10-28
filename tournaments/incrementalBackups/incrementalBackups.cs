int[] incrementalBackups(int lastBackupTime, int[][] changes) {
    var store = new HashSet<int>();

    foreach (var item in changes) {
        if (lastBackupTime < item[0] && !store.Contains(item[1])) {
            store.Add(item[1]);
        }
    }

    var result = store.ToList();
    result.Sort();

    return result.ToArray();
}
