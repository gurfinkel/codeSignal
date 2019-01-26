int minimalMultiple(int divisor, int lowerBound) {
    if (0 == lowerBound % divisor) {
        return lowerBound;
    }
    
    return divisor * (lowerBound / divisor + 1);
}
