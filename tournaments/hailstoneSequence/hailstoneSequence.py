def hailstoneSequence(n):
    res = 0
    while n != 1:
        if n % 2 == 0:
            n /= 2
        else:
            n = 3 * n + 1
        res += 1
    return res
