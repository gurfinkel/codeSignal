def digitDifferenceSort(a):
    def dg(n):
        s = list(map(int, str(n)))
        return max(s) - min(s)

    ans = [(a[i], i) for i in range(len(a))]
    A = sorted(ans, key = lambda x: (dg(x[0]), -x[1]))

    return [c[0] for c in A]
