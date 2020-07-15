int[] findTheNumbers(int[] a) {
    int bitmask = 0;

    foreach (int num in a) {
        bitmask ^= num;
    }

    int diff = bitmask & (-bitmask);
    int x = 0;

    foreach (int num in a) {
        if (0 != (num & diff)) {
            x ^= num;
        }
    }

    var result = new int[] { x, bitmask^x };

    Array.Sort(result);

    return result;
}
