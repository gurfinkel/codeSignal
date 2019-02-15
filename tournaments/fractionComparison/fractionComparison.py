def fractionComparison(a, b):
    c = a[0] / a[1]
    d = b[0] / b[1]
    if (c == d):
        return "="
    if (c < d):
        return "<"
    if (c > d):
        return ">"
