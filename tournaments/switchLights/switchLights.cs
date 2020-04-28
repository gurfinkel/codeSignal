int[] switchLights(int[] a) {
    var count = 0;

    for (int i = a.Length - 1; 0 <= i; --i) {
        if (1 == a[i]) {
            ++count;
        }

        if (1 == (count & 1)) {
            a[i] = 0 == a[i] ? 1 : 0;
        }
    }

    return a;
}
