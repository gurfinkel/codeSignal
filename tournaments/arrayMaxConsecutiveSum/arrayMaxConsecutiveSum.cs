int arrayMaxConsecutiveSum(int[] inputArray, int k) {
    var result = int.MinValue;
    var sum = 0;
    
    for (int i = 0; inputArray.Length > i; ++i) {
        if (k <= i) {
            sum -= inputArray[i - k];
        }
        
        sum += inputArray[i];
        result = Math.Max(result, sum);
    }
    
    return result;
}
