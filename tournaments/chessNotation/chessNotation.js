function chessNotation(notation) {
    const a = notation.replace(/\d/g, x => '1'.repeat(x))
        .split('/').map(x => x.split(''));
    let b = '';
    for (let i = 0; i < 8; ++i) {
        if (i) b += '/';
        for (let j = 0; j < 8; ++j)
            b += a[7-j][i];
    }
    return b.replace(/1+/g, x => x.length);
}
