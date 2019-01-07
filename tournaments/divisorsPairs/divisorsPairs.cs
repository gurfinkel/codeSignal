int divisorsPairs(int[] sequence) {
    int result = 0;
    
    for (int i = 0; sequence.Length > i; ++i) {
        for (int j = i + 1; sequence.Length > j; ++j) {
            if (0 == sequence[i] % sequence[j] || 0 == sequence[j] % sequence[i]) {
                ++result;
            }
        }
    }
    return result;   
}