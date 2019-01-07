def applesDistribution(a, b, c):
    co = 0
    if a % 1 == c:
        co += 1 
    if a % 2 == c:
        co += 1 
    if a % 3 == c:
        co += 1 
    return co
