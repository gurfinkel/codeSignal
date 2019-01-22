def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def fractionSum(a, b):
    d = a[1] * b[1]
    n = a[0] * b[1] + b[0] * a[1]
    g = gcd(d, n)
    
    return [n/g, d/g]
