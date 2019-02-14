int countLineColorings(int points, int colors) {
    var result = colors;

    for (var i = 1; points > i; ++i) {
        result *= (colors - 1);
    }

    return result;
}
