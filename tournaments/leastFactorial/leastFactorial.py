def leastFactorial(n):
    c = 1
    
    for i in range(1,n):
            c *= i
            if c >= n :
                return c
    return c
