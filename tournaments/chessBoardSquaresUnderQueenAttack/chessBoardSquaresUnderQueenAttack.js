/* 141: base solution
 * it counts a * b times the horizontal and vertical lines
 * and the diagonal cells to the four directions.
 * /
chessBoardSquaresUnderQueenAttack = (a, b) => {
    n = 0
    M = Math.min
    a--
    b--
    for (i = a + 1; i--; )
        for (j = b + 1; j--; )
            n += a + b + M(i, j) + M(i, b - j) + M(a - i, j) + M(a - i, b - j)
    return n
}

/* 99: it's simplied version of the base solution.
 * if we draw the calculated counts of the four diagonal direction:
 *
 * min(i,j) min(i, b-j) min(a-i, j) min(a-i, b-j)
 *
 *  _              _       /               \
 * |\              /|    |_                 _|
 *   \            /
 * 00000000  00000000    01234444     44443210
 * 01111111  11111110    01233333     33333210
 * 01222222  22222210    01222222     22222210
 * 01233333  33333210    01111111     11111110
 * 01234444  44443210    00000000     00000000
 *
 * get four similar (mirrored) tables, so min(i,j) * 4 is enough for the calculation
 * /
chessBoardSquaresUnderQueenAttack = (a, b) =>{
    n = 0
    for (i = a; i--; )
        for (j = b; j--; )
            n += a + b - 2 + (i < j ? i : j) * 4
    return n
}

/* 74: simplifed and using recursion.
 * watch the boards above, it can be simplify
 * a * b * (a + b - 2) // the vertical and horizontal directions
 * + [(a - 1) * (b - 1) + (a - 2) * b - 2) + ... + (1) * (b - a  + 1)] * 4
 */
function chessBoardSquaresUnderQueenAttack(a, b, c = a + b - 2) {
    return a * b && a * b * c + chessBoardSquaresUnderQueenAttack(a - 1, b - 1, 4);
}
