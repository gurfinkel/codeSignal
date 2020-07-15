bool alphabetSubstring(string s) {
    for (var idx = 1; s.Length > idx; ++idx) {
        if (1 + s[idx - 1] - 'a' != s[idx] - 'a') {
            return false;
        }
    }

    return true;
}
