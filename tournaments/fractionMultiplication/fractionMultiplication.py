def fractionMultiplication(a, b):
    def getGcd(a, b):
        if b == 0:
            return a
        return getGcd(b, a % b)

    result = [a[0] * b[0], a[1] * b[1]]
    gcd = getGcd(result[0], result[1])

    result[0] /= gcd
    result[1] /= gcd

    return result
