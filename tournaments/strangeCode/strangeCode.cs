string strangeCode(int s, int e) {
    var result = new StringBuilder();
    var c = '-';

    while (s++ < --e) {
        if (c == '-') {
            c = 'a';
            result.Append(c);
        } else {
            c = c == 'a' ? 'b' : 'a';
            result.Append(c);
        }
    }

    return result.ToString();
}
