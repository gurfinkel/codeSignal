string lineEncoding(string s) {
    var result = new StringBuilder();
    var count = 1;

    for (int i = 1; s.Length > i; ++i) {
        if (0 == s[i - 1] - s[i]) {
            ++count;
        } else {
            if (1 < count) {
                result.Append(count);
                count = 1;
            }

            result.Append(s[i - 1]);
        }
    }

    if (1 < count) {
        result.Append(count);
    }
    result.Append(s[s.Length - 1]);

    return result.ToString();
}
