def rightmostRoundNumber(inputArray):
    x = 0
    n = 0
    f = False
    
    while len(inputArray) > x:
        if inputArray[x] % 10 == 0:
            n = x
            f = True
        x += 1
    if f:
        return n
    return -1
