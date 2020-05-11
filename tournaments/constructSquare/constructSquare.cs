int constructSquare(string s) {
    List<int> letterCnt = new List<int>();
    for (int i = 0; i < 26; i++) {
        letterCnt.Add(0);
    }
    for (int i = 0; i < s.Length; i++) {
        letterCnt[s[i]-'a']++;
    }

    letterCnt.Sort();
    int best = -1;

    int minNumber = (int)Math.Pow(10, s.Length - 1);
    for (int k = (int)Math.Floor(Math.Sqrt(minNumber)); k * k < minNumber * 10; k++) {
        int n = k * k;
        List<int> digitCnt = new List<int>();
        for (int i = 0; i < 26; i++) {
            digitCnt.Add(0);
        }
        while (n > 0) {
            digitCnt[n % 10]++;
            n = n / 10;
        }

        digitCnt.Sort();
        if (Enumerable.SequenceEqual(letterCnt, digitCnt)) {
            best = k * k;
        }
    }
    return best;
}
