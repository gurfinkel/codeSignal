int ballsDistribution(int colors, int ballsPerColor, int boxSize) {
    var result = 0;
    var a = 0;
    var b = boxSize;

    for (var i = 0; colors > i; ++i) {
        var c = a;
        for (var j = 0; ballsPerColor > j; ++j) {
            --b;
            if (0 == b) {
                b = boxSize;
                ++a;
            }
        }
        if (c < a && (boxSize > b || c + 1 < a)) {
            ++result;
        }
    }

    return result;
}
