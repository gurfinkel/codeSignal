bool isCryptSolution(string[] crypt, char[][] solution) {
    var store = new int[26];

    foreach (char[] item in solution) {
        store[item[0] - 'A'] = item[1] - '0';
    }

    var a = getNumber(crypt[0], store);
    var b = getNumber(crypt[1], store);
    var c = getNumber(crypt[2], store);

    if (-1 == a || -1 == b || -1 == c) {
        return false;
    }

    return a + b == c;
}

int getNumber(string s, int[] a) {
    if (1 < s.Length && 0 == a[s[0] - 'A']) {
        return -1;
    }

    var result = 0;

    foreach (char letter in s) {
        result = result * 10 + a[letter - 'A'];
    }

    return result;
}
