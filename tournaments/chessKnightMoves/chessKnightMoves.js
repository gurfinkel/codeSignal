function chessKnightMoves(cell) {
    const a = cell[0].charCodeAt() - 'a'.charCodeAt();
    const b = cell[1].charCodeAt() - '0'.charCodeAt();
    let result = 0;

    if (0 <= a - 1 && 1 <= b - 2) ++result;
    if (0 <= a - 2 && 1 <= b - 1) ++result;
    if (7 >= a + 2 && 1 <= b - 1) ++result;
    if (7 >= a + 1 && 1 <= b - 2) ++result;
    if (0 <= a - 1 && 8 >= b + 2) ++result;
    if (0 <= a - 2 && 8 >= b + 1) ++result;
    if (7 >= a + 1 && 8 >= b + 2) ++result;
    if (7 >= a + 2 && 8 >= b + 1) ++result;

    return result;
}
