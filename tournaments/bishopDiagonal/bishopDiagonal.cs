string[] bishopDiagonal(string bishop1, string bishop2) {
    var result = new string[] {bishop1, bishop2};
    var a = bishop1[0] - 'a' + 1;
    var b = bishop1[1] - '0';

    var c = bishop2[0] - 'a' + 1;
    var d = bishop2[1] - '0';

    if (Math.Abs(a - c) == Math.Abs(b - d)) {
        return getNewPositions(a, b, c, d);
    } else {
        Array.Sort(result);
        return result;
    }
}

string[] getNewPositions(int a, int b, int c, int d) {
    var aSb = new StringBuilder(2);
    var bSb = new StringBuilder(2);
    var e = a;
    var f = b;

    while (1 != e && 1 != f) {
        --e;
        --f;
    }

    if (Math.Abs(e - c) == Math.Abs(f - d)) {
        a = e;
        b = f;
        c = Math.Abs(9 - b);
        d = Math.Abs(9 - a);
    } else {
        while (1 != a && 8 != b) {
            --a;
            ++b;
        }
        c = b;
        d = a;
    }

    aSb.Append((char)('a' + a - 1));
    aSb.Append((char)('0' + b));

    bSb.Append((char)('a' + c - 1));
    bSb.Append((char)('0' + d));

    return new string[] {aSb.ToString(), bSb.ToString()};
}
