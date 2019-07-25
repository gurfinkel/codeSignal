function kuromasuPuzzle(board) {
    const result = Array(board.length).fill([]).map(_ => Array(board[0].length).fill(-1));

    for (let i in board) {
        for (let j in board[i]) {
            if ('#' === board[i][j]) {
                let a = 1;
                for (let k = j - 1; (b = board[i][k--]) === '.' || '#' === b; ) ++a;
                for (let k = +j + 1; (b = board[i][k++]) === '.' || '#' === b; ) ++a;
                for (let k = i - 1; (b = board[k--]) && ('.' === b[j] || '#' === b[j]); ) ++a;
                for (let k = +i + 1; (b = board[k++]) && ('.' === b[j] || '#' === b[j]); ) ++a;
                result[i][j] = a;
            }
        }
    }

    return result;
}
