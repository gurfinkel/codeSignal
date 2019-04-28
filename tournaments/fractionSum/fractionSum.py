def fractionSum(a, b):
    c = a[1] * b[1]
    d = a[0] * b[1] + b[0] * a[1]
    gcd = getGcd(c, d)
    
    return [d/gcd, c/gcd]

def getGcd(a, b):
    while b:
        a, b = b, a % b
    return a
