#pure dp solution O(max(freetime) * (n log n + q)) where n is the size of duration and q is the size of freetime

#also look at two alternative approaches :
#1. use sparse table (written in py2 and has the same complexity but instead of finding result online we do pre-processing)
#2. use mo's algorithm (written in C, has the complexity of max(freeTime) * sqrt(n) * (n+q))

from functools import lru_cache
def seriesEpisodes(duration, l, r, freeTime):
    limit = max(freeTime)
    @lru_cache(None)
    def dp(l, r, i, j):
        if l > r : return {0}
        ans = dp(l+i,r+j,i,j)
        val = duration[[l, r][j]]
        return ans | { i + val for i in ans if i + val <= limit}

    ans = 0
    for l, r, time in zip(l, r, freeTime):
        k = int(math.log2(r-l+1))
        k = (l // 2**k + 1) * 1 << k
        ans += any( time - val in dp(l, k-1, 1, 0) for val in dp(k,r, 0, -1))
    return ans