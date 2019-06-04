function areSimilarNumbers(a, b, divisor) {
    return !(a%divisor) && !(b%divisor) || a%divisor && b%divisor;
}
