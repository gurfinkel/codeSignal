string reversedSumOfDigits(int p, int n) {
    if ((p == 0 && n == 1)) return "0";
    if (9 * n < p || p == 0) return "-1";
    
    var result = "";
    for (int i = 0; i < n-1; i++){
        int tmp = (p - 1) > 9 ? 9: (p - 1);
        p -= tmp;
        result = tmp + result;
    }   
    return p + "" + result;
}
