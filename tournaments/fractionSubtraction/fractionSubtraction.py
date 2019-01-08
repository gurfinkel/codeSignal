def fractionSubtraction(a, b):
    if a[1] != b[1]:
        aa = [i * b[1] for i in a]
        bb = [i * a[1] for i in b]
        a = aa
        b = bb
    m = [a[0] - b[0], a[1]]

    for i in range(2, min(m) + 1):
        if m[0] % i == 0 and m[1] % i == 0:
            m = [m[0] / i, m[1] / i]
    return m
