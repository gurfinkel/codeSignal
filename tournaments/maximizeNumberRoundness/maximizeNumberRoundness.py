def maximizeNumberRoundness(n):
    a = str(n)
    b = a.count('0')

    return a[:len(a) - b].count('0')
