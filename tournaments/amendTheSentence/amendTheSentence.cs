string amendTheSentence(string s) {
    var result = new StringBuilder();

    for (int i = 0; s.Length > i; ++i) {
        if (Char.IsUpper(s[i])) {
            if (0 < i) {
                result.Append(" ");
            }

            result.Append(char.ToLower(s[i]));
        } else {
            result.Append(s[i]);
        }
    }

    return result.ToString();
}
