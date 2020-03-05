bool sudoku2(char[][] board) {
    var r = new bool[9, 9];
    var c = new bool[9, 9];
    var s = new bool[3, 3, 9];

    int n = 0;

    for(int i = 0; i < 9; i++) {
        for(int j = 0; j < 9; j++) {
            if (board[i][j] > '0' && board[i][j] <= '9') {
                n = board[i][j] - '1';

                if (r[i, n]) {
                    return false;
                }

                r[i, n] = true;

                if (c[j, n]) {
                    return false;
                }

                c[j, n] = true;

                if (s[i/3,j/3, n]) {
                    return false;
                }

                s[i/3, j/3, n] = true;
            }
        }
    }
    return true;
}
