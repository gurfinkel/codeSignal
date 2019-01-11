def divNumber(k, l, r):
    ans = 0

    for i in range(l, r + 1):
        n = i
        divs = 1
        j = 2

        while n >= j * j:
            p = 0
            while n % j == 0:
                n /= j
                p += 1
            divs *= p + 1 
            if k < divs:
                break
            j += 1
        if 1 < n:
            divs *= 2
        if k == divs:
            ans += 1

    return ans
