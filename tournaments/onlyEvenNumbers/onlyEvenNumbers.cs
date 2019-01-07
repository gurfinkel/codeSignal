int[] onlyEvenNumbers(int left, int right) {
    var result = new List<int>();
    
    for (int i = left; right >= i; ++i) {
        if (0 == (i & 1)) {
            result.Add(i);
        }
    }
    
    return result.ToArray();
}