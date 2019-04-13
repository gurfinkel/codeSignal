/* 275: a little more efficient algoritm:
 *
 * - it's check duplicates, not calculate a number twice
 * - n * 10 < level k maximum, then ignore
 * - n + 1 enable p times.
 *      there is no result with two times n+1 if k < 7
 *                         with three times n+1 if k < 15
 * so, it works to k = 40. if k > 40 then some result larger than Number.MAX_SAFE_INTEGER (53 bit)
 *
 * running time, n = 100, k = 40: 1445230823358464 (1058ms)

q = {}                    // n counted already
M = Array(100).fill(0)    // max values for each k
G = n => {
    var s = 0, t = 1
    for (var i of n + "")
        if ("012xx59x86"[i] > "9")
            return 0
        else {
            s += t * "012  59 86"[i]
            t *= 10
        }
    return +s
}
F = kStepMaximization = (n, k, p = 1 + (k > 6) + (k > 14), x = G(n)) =>
    q[n] > k || n * 10 < M[k]
        ? 0
        : (q[n] = k, n > M[k] ? M[k] = n : 1, k--)
            ? Math.max(x > 0 && F(x, k, p), F(n * 2, k, p), p ? F(n + 1, k, p - 1) : 0)
            : n
 */
function kStepMaximization(n, k) {
  return k-- ? Math.max(kStepMaximization(n + 1, k), kStepMaximization(n * 2, k), kStepMaximization([...n + (s = "")].map(v => s = "012  59 86"[v] + s) | s, k)) : n;
}