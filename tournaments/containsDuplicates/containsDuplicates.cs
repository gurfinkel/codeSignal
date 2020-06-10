bool containsDuplicates(int[] a) {
    return a.Length != (new HashSet<int>(a)).Count;
}
