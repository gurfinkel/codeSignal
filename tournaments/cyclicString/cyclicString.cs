int cyclicString(string s) {
    var n = s.Length;
    
    for (int i = 1; n >= i; ++i) {
        var part = s.Substring(0, i);
        var isRoot = true;
        
        for (int j = 0; n > j; ++j) {
            if (s[j] != part[j % part.Length]) {
                isRoot = false;
                break;
            }
        }
        if (isRoot) {
            return i;
        }
    }
    
    return 0;
}
