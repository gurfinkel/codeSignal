function inversePermutation(permutation) {
    const result = Array.from({length: permutation.length}).fill(0);
    
    for (let i = 0; permutation.length > i; ++i)
        result[permutation[i] - 1] = i + 1;
    
    return result;
}
