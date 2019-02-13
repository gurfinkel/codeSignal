string lookAndSaySequenceNextElement(string element) {
    var result = new StringBuilder();
    var a = 1;

    for (int i = 1; i < element.Length; i++) {
        if (element[i] == element[i - 1]) {
            ++a;
        } else {
            result.Append(a);
            result.Append(element[i - 1]);
            a = 1;
        }
    }

    result.Append(a);
    result.Append(element[element.Length - 1]);

    return result.ToString();
}
