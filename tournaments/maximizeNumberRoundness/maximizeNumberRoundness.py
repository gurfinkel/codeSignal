def maximizeNumberRoundness(n):
    n = str(n)
    z = n.count('0')

    return str(n)[:len(n) - z].count('0')
