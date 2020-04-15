bool regexMatching(string pattern, string test) {
    var index = 0;

    if ('^' != pattern[0] && '$' != pattern[pattern.Length - 1] && pattern.Length == test.Length) {
        return test.Equals(pattern);
    } else if ('^' == pattern[0] && '$' == pattern[pattern.Length - 1]) {
        return test.Equals(pattern.Substring(1, pattern.Length - 2));
    } else if ('^' == pattern[0]) {
        while (index < pattern.Length - 1) {
            if (pattern[1 + index] != test[index++]) {
                return false;
            }
        }

        return true;
    } else if ('$' == pattern[pattern.Length - 1]) {
        while (index < pattern.Length - 1) {
            if (pattern[pattern.Length - 2 - index] != test[test.Length - 1 - index++]) {
                return false;
            }
        }

        return true;
    } else {
        return 0 != kmpSearch(pattern, test).Length;
    }
}

int[] kmpSearch(string p, string t) {
    var result = new List<int>();
    var pLength = p.Length;
    var pIndex = 0;
    var tLength = t.Length;
    var tIndex = 0;

    var lps = getLps(p);

    while (tLength > tIndex) {
        if (p[pIndex] == t[tIndex]) {
            ++pIndex;
            ++tIndex;
        }

        if (pLength == pIndex) {
            result.Add(tIndex - pIndex);
            pIndex = lps[pIndex - 1];
        } else if (tLength > tIndex && p[pIndex] != t[tIndex]) {
            if (0 == pIndex) {
                ++tIndex;
            } else {
                pIndex = lps[pIndex - 1];
            }
        }
    }

    return result.ToArray();
}

int[] getLps(string s) {
    var n = s.Length;

    var result = new int[n];
    result[0] = 0;

    var index = 1;
    var lastPrefixLength = 0;

    while (n > index) {
        if (s[index] == s[lastPrefixLength]) {
            result[index++] = ++lastPrefixLength;
        } else {
            if (0 == lastPrefixLength) {
                result[index++] = lastPrefixLength;
            } else {
                lastPrefixLength = result[lastPrefixLength - 1];
            }
        }
    }

    return result;
}
