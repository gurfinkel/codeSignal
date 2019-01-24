int lrSegmentNumber(int l, int r) {
    var result = 0;
    
    for (int i = l; r >= i; ++i) {
        result = 10 * result + i;
    }
    
    return result;
}
