function fractionComparison(a, b) {
    if (1 === (a[0] * b[1]) / (a[1] * b[0])) {
        return '=';
    } else if (1 > (a[0] * b[1]) / (a[1] * b[0])) {
        return '<';
    } else {
        return '>';
    }
}
