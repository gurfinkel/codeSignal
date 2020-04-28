int sameElementsNaive(int[] a, int[] b) {
    var bHash = new HashSet<int>(b);

    bHash.IntersectWith(a);

    return bHash.Count;
}
