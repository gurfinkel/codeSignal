int pagesNumbering(int n) {
    var tenPower = 1;
    var digitsPerPage = 1;
    var result = 0;
    
    while (tenPower * 10 <= n) {
        result += tenPower * 9 * digitsPerPage;
        tenPower *= 10;
        digitsPerPage++;
    }
    
    result += (n - tenPower + 1) * digitsPerPage;
    
    return result;
}
