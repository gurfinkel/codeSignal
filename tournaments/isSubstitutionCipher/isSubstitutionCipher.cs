bool isSubstitutionCipher(string string1, string string2) {
    Dictionary<char,char> codes1 = new Dictionary<char,char>();
    Dictionary<char,char> codes2 = new Dictionary<char,char>();

    for (int i = 0; string1.Length > i; ++i) {
        char c1 = string1[i];
        char c2 = string2[i];

        if (codes1.ContainsKey(c1)) {
            if (c2 != codes1[c1]) {
                return false;
            }
        } else {
            codes1.Add(c1, c2);
        }

        if (codes2.ContainsKey(c2)) {
            if (c1 != codes2[c2]) {
                return false;
            }
        } else {
            codes2.Add(c2, c1);
        }
    }

    return true;
}
