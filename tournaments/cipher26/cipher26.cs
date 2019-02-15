string cipher26(string message) {
    var n = message.Length;
    var result = new StringBuilder(n);
    var sum = 0;

    for (int i = 0; n > i; ++i) {
        var temp = ((26 - (sum % 26) + (message[i] - 'a')) % 26 + 'a');
        result.Append((char)temp);
        sum += (temp - 'a');
    }

    return result.ToString();
}
