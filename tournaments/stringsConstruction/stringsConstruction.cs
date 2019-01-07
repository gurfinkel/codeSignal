int stringsConstruction(string a, string b) {
    var result = int.MaxValue;
    var aStore = new int[26];
    var bStore = new int[26];
    
    for (int i = 0; a.Length > i; ++i) {
        ++aStore[a[i] - 'a'];
    }
    
    for (int i = 0; b.Length > i; ++i) {
        ++bStore[b[i] - 'a'];
    }
    
    for (int i = 0; a.Length > i; ++i) {
        if (aStore[a[i] - 'a'] > bStore[a[i] - 'a']) {
            return 0;
        } else {
            result = Math.Min(result, bStore[a[i] - 'a'] / aStore[a[i] - 'a']);
        }
    }
    
    return result;
}
