string truncateString(string s) {
    while (!string.IsNullOrEmpty(s) &&
           (0 == (s[0] - '0') % 3 ||
            0 == (s[s.Length - 1] - '0') % 3 ||
            0 == ((s[0] - '0') + (s[s.Length - 1] - '0')) % 3)) {
        if (0 == (s[0] - '0') % 3) {
            s = s.Substring(1, s.Length - 1);
        } else if (0 == (s[s.Length - 1] - '0') % 3) {
            s = s.Substring(0, s.Length - 1);
        } else if (0 == ((s[0] - '0') + (s[s.Length - 1] - '0')) % 3) {
            s = s.Substring(1, s.Length - 2);
        }
    }

    return s;
}
