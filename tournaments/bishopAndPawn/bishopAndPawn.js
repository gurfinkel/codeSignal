function bishopAndPawn(bishop, pawn) {
    const [a, b] = bishop;
    const [c, d] = pawn;

    return (Math.abs(a.charCodeAt() - c.charCodeAt()) === Math.abs(+b - +d) );
}
