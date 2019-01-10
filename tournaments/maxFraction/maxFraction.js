function maxFraction(numerators, denominators) {

    var maxFractionIndex = 0;
    for (var i = 1; i < numerators.length; i++) {
        if (numerators[i] * denominators[maxFractionIndex] >
            numerators[maxFractionIndex] * denominators[i]) {
            maxFractionIndex = i;
        }
    }
    return maxFractionIndex;
}
    