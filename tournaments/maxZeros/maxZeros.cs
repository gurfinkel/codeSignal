/*this is 100% within 3 ≤ n ≤ 400, if n + 1 is a power of 2 then the answer is 3 except 7.
and if n in 125, 127, 375 the answer is 5, otherwise the answer is 2.
answer derived from a similar one here : https://oeis.org/A270026*/
int maxZeros(int n) {
    return 7 == n ? 7 : n % 125 < 3? 5 : (++n & (n - 1)) == 0? 3 : 2;
}
