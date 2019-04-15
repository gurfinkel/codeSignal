function kuromasuPuzzle(board) {
    const result = [];

    for (let i in board) {
      result.push([]);
      for (let j in col = board[i]) {
        let t = -1;
        if ('#' === col[j]) {
          t = 1;
          for (k=j-1; (B = col[k--]) == '.' || B == '#'; ) ++t;
          for (k=+j+1; (B = col[k++]) == '.' || B == '#'; ) ++t;
          for (k=i-1; (B = board[k--]) && (B[j] == '.' || B[j] == '#'); ) ++t;
          for (k=+i+1; (B = board[k++]) && (B[j] == '.' || B[j] == '#'); ) ++t;
        }
        result[i][j] = t;
      }
    }

    return result;
}
