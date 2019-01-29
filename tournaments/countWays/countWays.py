def countWays(n, k):
    MOD = 10 ** 9 + 7

    c_nk = []
    for i in range(n + 1):
        c_nk.append([])
        for j in range(k + 1):
            c_nk[i].append(0)
    c_nk[0][0] = 1
    for i in range(n + 1):
        for j in range(k + 1):
            if i + 1 <= n:
                c_nk[i + 1][j] = (c_nk[i][j] + c_nk[i + 1][j]) % MOD
                if j + 1 <= k:
                    c_nk[i + 1][j + 1] += c_nk[i][j]
                    c_nk[i + 1][j + 1] %= MOD

    return c_nk[n][k]
