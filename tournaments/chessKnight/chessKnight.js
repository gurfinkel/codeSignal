function chessKnight(cell) {
    let result = 0;
    let a = cell[0].charCodeAt() - 'a'.charCodeAt() + 1;
    let b = cell[1].charCodeAt() - '0'.charCodeAt();

    if (1 <= a - 1 && 1 <= b - 2) ++result;
    if (1 <= a - 2 && 1 <= b - 1) ++result;
    if (8 >= a + 2 && 1 <= b - 1) ++result;
    if (8 >= a + 1 && 1 <= b - 2) ++result;
    if (1 <= a - 1 && 8 >= b + 2) ++result;
    if (1 <= a - 2 && 8 >= b + 1) ++result;
    if (8 >= a + 1 && 8 >= b + 2) ++result;
    if (8 >= a + 2 && 8 >= b + 1) ++result;

    return result;
}
