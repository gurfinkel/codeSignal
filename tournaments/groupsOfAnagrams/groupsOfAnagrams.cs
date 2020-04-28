int groupsOfAnagrams(string[] words) {
    var store = new HashSet<string>();

    if (null == words || 0 == words.Length) {
        return 0;
    }

    foreach (var item in words) {
        var str = item.ToCharArray();

        Array.Sort(str);

        var key = string.Join("", str);

        if (!store.Contains(key)) {
            store.Add(key);
        }
    }

    return store.Count;
}
