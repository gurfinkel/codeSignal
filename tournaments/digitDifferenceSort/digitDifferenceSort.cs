int[] digitDifferenceSort(int[] a) {
    var result = a.Select((item, index) => new KeyValuePair<int, int>(item, index)).OrderBy(x => x, Comparer<KeyValuePair<int, int>>.Create((i, j) => compare(i, j))).Select(k => k.Key);

    return result.ToArray();
}

int compare(KeyValuePair<int, int> a, KeyValuePair<int, int> b) {
    var aDigits = getDigits(a.Key);
    var bDigits = getDigits(b.Key);
    var aMaxDigit = aDigits.Max();
    var aMinDigit = aDigits.Min();
    var bMaxDigit = bDigits.Max();
    var bMinDigit = bDigits.Min();
    if ((aMaxDigit - aMinDigit) > (bMaxDigit - bMinDigit)) return 1;
    else if ((aMaxDigit - aMinDigit) < (bMaxDigit - bMinDigit)) return -1;
    else
        if (a.Value > b.Value) return -1;
        else if (a.Value < b.Value) return 1;
        else return 0;
}

List<int> getDigits(int a) {
    var result = new List<int>();
    while (0 < a) {
        result.Add(a % 10);
        a /= 10;
    }
    return result;
}
