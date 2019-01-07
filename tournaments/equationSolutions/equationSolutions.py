def equationSolutions(l, r):
    result = 0

    for a in range(l, 1 + r):
        b = min(1 + a, l)
        while r >= b:
            if a * a * a == b * b:
                result += 1
            b += 1
    
    return result
