int maximumSubsetProduct(int[] a) {
    int count = 0;
    int min = int.MinValue; 
    
    foreach (int item in a) {
        if (0 > item) {
            ++count;
            min = Math.Max(min, item);
        }
    }
    
    return 0 == (count & 1) || 2 > a.Length ? 1 : min;
}
