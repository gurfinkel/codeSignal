function insertBits(n, a, b, k) {
    const n1 = (n >> b + 1) << b + 1;
    const n2 = n & (1 << a) - 1;
    const n3 = k << a;
    
    return n1 + n2 + n3;
}
