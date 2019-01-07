int[] maxSumSegments(int[] inputArray) {
    var result = new List<int>();
    var n = inputArray.Length;
    var store = new int[n];
    
    store[0] = inputArray[0];
    
    for (int i = 1; n > i; ++i) {
        store[i] = inputArray[i] + store[i - 1];
    }
    
    for (int i = 0; n > i; ++i) {
        result.Add(getMaxSumIndex(i, store));
    }
    
    return result.ToArray();
}

int getMaxSumIndex(int n, int[] sums) {
    var l = 0;
    var r = l + n;
    var result = 0;
    var sum = int.MinValue;
    
    while (sums.Length > r) {
        var temp = 0 == l ? (sums[r]) : (sums[r] - sums[l - 1]);
        
        if (sum < temp) {
            sum = temp;
            result = l;
        }
        
        ++l;
        ++r;
    }
    
    return result;
}
