string sortByString(string s, string t) {
    var sArray = s.ToCharArray();
    var store = new Dictionary<char, int>();

    for (int i = 0; t.Length > i; ++i) {
        store.Add(t[i], i);
    }

    Array.Sort(sArray, (a, b) => {if (a == b) {return 0;} if (store[a] > store[b]) {return 1;} else {return -1;}});

    return string.Join("", sArray);
}
