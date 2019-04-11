string buildPalindrome(string st) {
    if (null == st || 1 >= st.Length || isPalindrome(st)) {
        return st;
    }

    var n = st.Length;
    var sb = new StringBuilder(2 * n);
    sb.Append(st);

    char[] charArray = st.ToCharArray();
    Array.Reverse(charArray);
    sb.Append(charArray);
    var result = sb.ToString();

    for (int i = 0; n > i; ++i) {
        if (isPalindrome(sb.Remove(n, 1).ToString())) {
            result = sb.ToString();
        }
    }

    return result;
}

bool isPalindrome(string s) {
    if (null == s || 0 == s.Length) {
        return false;
    }

    if (1 == s.Length) {
        return true;
    }

    for (int i = 0; s.Length / 2 > i; ++i) {
        if (0 != s[i] - s[s.Length - 1 - i]) {
            return false;
        }
    }

    return true;
}
