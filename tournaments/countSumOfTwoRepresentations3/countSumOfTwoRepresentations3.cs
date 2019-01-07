int countSumOfTwoRepresentations3(int n, int l, int r) {
    var result = 0;
    
    while (l <= r) {
        if (n == l + r) {
            ++result;
            ++l;
            --r;
        } else if (n > l + r) {
            ++l;
        } else {
            --r;
        }
    }
    
    return result;
}
