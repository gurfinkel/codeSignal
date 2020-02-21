function chessBishopDream(boardSize, initPosition, initDirection, k) {
    var finalPosition = [];

    // first coordinate, second coordinate
    for (var i = 0; i < 2; i++) {
        var position = initPosition[i];
        var direction = initDirection[i];

        // simple addition, ignoring the edges
        var newPosition = position + direction * k;

        // period of the repeating pattern (e.g. 0 1 2 2 1 0 0 1 ...)
        var modulus = boardSize[i] * 2;

        // this is our "index" into the pattern
        newPosition %= modulus;

        // ensure a positive result of the modulo
        if (newPosition < 0) {
            newPosition += modulus;
        }

        var middle = (modulus - 1) / 2;

        finalPosition[i] = middle - Math.abs(middle - newPosition);
    }

    return finalPosition;
}
