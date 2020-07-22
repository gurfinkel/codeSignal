function mirrorBits(a) {
    let b = 0;
    
    while (a) {
        b <<= 1;
        b |= a & 1;
        a >>= 1;
    }
    
    return b;
}
