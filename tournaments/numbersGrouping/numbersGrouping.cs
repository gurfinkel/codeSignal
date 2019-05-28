int numbersGrouping(int[] a) {
    var result = 0;
    var store = new int[1000000];

    for (var i = 0; a.Length > i; ++i) {
        var gr = getGroup(a[i]);
        if (0 == store[gr]) ++store[gr];
    }

    for (var i = 0; store.Length > i; ++i) {
        result += store[i];
    }

    return result + a.Length;
}

int getGroup(int n) {
    var result = (n - 1) / 10000;

    return result;
}
