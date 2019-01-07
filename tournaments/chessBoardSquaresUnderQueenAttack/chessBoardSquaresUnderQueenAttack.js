function chessBoardSquaresUnderQueenAttack(a, b) {
    function search(x, y, dx, dy) {
        if (0 > x || a <= x || 0 > y || b <= y) {
            return 0;
        }

        return 1 + search(x + dx, y + dy, dx, dy);
    };

    let result = 0;

    for (var i = 0; a > i; ++i) {
        for (var j = 0; b > j; ++j) {
            for (var dx = -1; 1 >= dx; ++dx) {
                for (var dy = -1; 1 >= dy; ++dy) {
                    if (dx || dy) {
                        result += search(i + dx, j + dy, dx, dy);
                    }
                }
            }
        }
    }

    return result;
}
  