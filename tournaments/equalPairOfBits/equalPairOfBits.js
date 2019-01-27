function equalPairOfBits(n, m) {
    let result = 0;
    
    while (0 < n && 0 < m && 1 === (n & 1) + (m & 1)) {
        n >>= 1;
        m >>= 1;
        ++result;
    }
    
    return Math.pow(2, result);
}
