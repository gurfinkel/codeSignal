string minSubstringWithAllChars(string s, string t) {
    if (!string.IsNullOrEmpty(s) && string.IsNullOrEmpty(t)) {
        return "";
    }

    var letterFrequencies = new int[26];
    var result = "";

    foreach (var letter in t) {
        ++letterFrequencies[letter - 'a'];
    }

    for (int l = 0, r = 0, count = 0; s.Length > r; ++r) {
        if (0 < letterFrequencies[s[r] - 'a']--) {
            ++count;
        }

        while (t.Length == count) {
            if ("" == result || 1 + r - l < result.Length) {
                result = s.Substring(l, 1 + r - l);
            }

            if (0 < ++letterFrequencies[s[l++] - 'a']) {
                --count;
            }
        }
    }

    return result;
}
