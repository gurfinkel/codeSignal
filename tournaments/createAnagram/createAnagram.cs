int createAnagram(string s, string t) {
    var result = 0;
    var a = new int[26];
    var b = new int[26];

    for(int i = 0; s.Length > i; ++i) {
        ++a[s[i] - 'A'];
        ++b[t[i] - 'A'];
    }

    for (int i = 0; 26 > i; ++i) {
        result += Math.Abs(a[i] - b[i]);
    }

    return result / 2;
}
