def exerciseElaboration(p, n):
    p = str(p)
    x = p + "0" * n + p
    return sum(map(int,str(int(x)**2)))