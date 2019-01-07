int sameElementsNaive(int[] a, int[] b) {
    var result = 0;
    var bList = b.ToList();
    
    foreach (var item in a) {
        if (bList.Contains(item)) {
            ++result;
        }
    }
    
    return result;
}
