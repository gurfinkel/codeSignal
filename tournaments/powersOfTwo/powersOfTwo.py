def powersOfTwo(n):
    result = []
    cur = 1
    
    while 0 < n:
        if 1 == n % 2:
            result.append(cur)
        n >>= 1
        cur <<= 1

    return result
