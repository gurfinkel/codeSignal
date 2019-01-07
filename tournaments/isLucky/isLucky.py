def isLucky(n):
    s = str(n)
    l = len(s) // 2

    return sum(int(x) for x in s[:l]) == sum(int(x) for x in s[l:])
