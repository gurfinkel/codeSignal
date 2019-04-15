def maximizeNumberRoundness(n):
    return str(n)[:len(str(n)) - str(n).count('0')].count('0')
