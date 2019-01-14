def mirrorBits(a):
    
    b = 0
    while a > 0:
        b <<= 1
        b |= a & 1
        a >>= 1

    return b
