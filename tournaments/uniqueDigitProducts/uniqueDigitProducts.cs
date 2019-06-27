int uniqueDigitProducts(int[] a) {
    var store = new HashSet<int>();

    foreach (int item in a) {
        var newDigitProduct = getDigitProduct(item);
        if (!store.Contains(newDigitProduct)) store.Add(newDigitProduct);
    }

    return store.Count;
}

int getDigitProduct(int a) {
    var result = 1;

    while (0 < a) {
        result *= (a % 10);
        a /= 10;
    }

    return result;
}
