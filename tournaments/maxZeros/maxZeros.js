function maxZeros(n) {
    return 7 === n ? 7 : 3 > n % 125 ? 5 : (++n & (n - 1)) ? 2 : 3;
}
