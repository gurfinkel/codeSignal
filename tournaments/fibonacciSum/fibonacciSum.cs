int[] fibonacciSum(int n) {
    var store = new List<int> {1};
    var a = 1;
    var b = 1;

    while (n >= b) {
        var c = a + b;
        a = b;
        b = c;
        store.Add(a);
    }

    var result = new List<int>();

    for (var i = store.Count - 1; 0 <= i; --i) {
        if (n >= store.ElementAt(i)) {
            n -= store.ElementAt(i);
            result.Add(store.ElementAt(i));
        }
    }

    result.Reverse();

    return result.ToArray();
}
