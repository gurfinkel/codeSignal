string addBinaryStrings(string a, string b) {
    var store = new Stack<int>();
    var memory = 0;
    var i = a.Length - 1;
    var j = b.Length - 1;

    while (0 <= i || 0 <= j || 0 < memory) {
        var aDigit = 0 <= i && '1' == a[i--] ? 1 : 0;
        var bDigit = 0 <= j && '1' == b[j--] ? 1 : 0;
        store.Push(aDigit ^ bDigit ^ memory);
        memory = 1 == (aDigit & bDigit) || 1 == ((aDigit ^ bDigit) & memory) ? 1 : 0;
    }

    return string.Join("", store);
}
