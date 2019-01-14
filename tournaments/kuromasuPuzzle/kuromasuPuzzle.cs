int[][] kuromasuPuzzle(char[][] board) {
    var result = new int[n][];
    var rows = board.Length;
    var cols = board[0].Length;

    for (int i = 0; rows > i; ++i) {
        result[i] = new int[cols];
        for (int j = 0; cols > j; ++j) {
            result[i][j] = -1;
            
            if ('#' == board[i][j]) {
                var a = 1;
                var d = 1;

                while (0 <= i - d && '*' != board[i - d][j]) { 
                    ++d; 
                    ++a; 
                }

                d = 1;

                while (rows > i + d && '*' != board[i + d][j]) { 
                    ++d; 
                    ++a; 
                }

                d = 1;

                while (0 <= j - d && '*' != board[i][j - d]) { 
                    ++d; 
                    ++a; 
                }

                d = 1;

                while (cols > j + d && '*' != board[i][j + d]) { 
                    ++d; 
                    ++a; 
                }

                result[i][j] = a;
            }
        }
    }

    return result;
}