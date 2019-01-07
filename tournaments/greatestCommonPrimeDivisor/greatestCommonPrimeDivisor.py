def greatestCommonPrimeDivisor(a, b):
    for i in range(min(a, b), 2, -1):
        pri = True
        for j in range(2, math.ceil(math.sqrt(i))):
            if i % j == 0:
                pri = False
                break
        if pri and a % i == 0 and b % i == 0:
            return i
    return -1