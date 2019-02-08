int createAnagram(string s, string t) {
    var result = 0;
    var a = new int[26];
    var b = new int[26];

    for(int i = 0; i < s.Length; i++) {
        a[s[i] - 'A']++;
        b[t[i] - 'A']++;
    }

    for (int i = 0; i < 26; i++) {
        result += Math.Abs(a[i] - b[i]);
    }

    return result / 2;
}
