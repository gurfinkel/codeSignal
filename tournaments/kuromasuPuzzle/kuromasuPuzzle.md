
You've just discovered what  [Kuromasu puzzles](https://en.wikipedia.org/wiki/Kuromasu)  are, and you're really excited about them! A kuromasu puzzle is played on a rectangular board, and some of the cells on the board have numbers in them. Each cell may be either black or white. The object is to determine whether each cell is black or white. The following rules determine which cells are which:

-   Each number on the board represents the number of white cells that can be seen from that cell, including itself. A cell can be seen from another cell if they are in the same row or column and if there are no black cells between them in that row or column.
-   Numbered cells cannot be black.
-   No two black cells can be horizontally or vertically adjacent.
-   All the white cells must be connected horizontally or vertically.

You want to create your own kuromasu puzzle so that your friends can solve it. You've generated a  `board`  that satisfies all the above conditions, but it doesn't contain any numbers right now. Instead, you put the  `'#'`  symbol in these cells. Now your task is to change all the  `'#'`  symbols to the correct numbers according to the first condition above, and return a new board. Put  `-1`  in cells that don't contain  `'#'`.

Example

For

    board = [
    ['*', '.', '#', '.', '.', '*', '.', '.', '#', '.', '.'], 
    ['.', '*', '.', '.', '*', '.', '*', '.', '#', '.', '.'], 
    ['.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '#'], 
    ['#', '.', '.', '.', '.', '.', '.', '*', '.', '*', '.'], 
    ['*', '#', '.', '.', '*', '.', '.', '.', '*', '.', '.'], 
    ['.', '.', '#', '.', '#', '.', '#', '*', '#', '.', '.'], 
    ['.', '.', '*', '.', '.', '.', '.', '.', '*', '#', '*'], 
    ['.', '.', '.', '.', '*', '.', '*', '.', '.', '*', '#'], 
    ['#', '.', '*', '.', '.', '*', '#', '.', '*', '.', '.'], 
    ['.', '.', '#', '.', '.', '.', '*', '.', '.', '.', '.'], 
    ['.', '*', '#', '*', '.', '*', '.', '.', '#', '.', '*']] 

the output should be

    kuromasuPuzzle(board) = [
    [-1, -1, 9, -1, -1, -1, -1, -1, 8, -1, -1], 
    [-1, -1, -1, -1, -1, -1, -1, -1, 7, -1, -1], 
    [-1, -1, -1, -1, 12, -1, -1, -1, -1, -1, 16], 
    [ 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 
    [-1, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1], 
    [-1, -1, 12, -1, 8, -1, 11, -1, 3, -1, -1], 
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, 3, -1], 
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3], 
    [ 7, -1, -1, -1, -1, -1, 2, -1, -1, -1, -1], 
    [-1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1], 
    [-1, -1, 2, -1, -1, -1, -1, -1, 5, -1, -1]] 

-   The leftmost  `'#'`  at the first row has  `1`  white cell to the left,  `2`  white cells to the right and  `5`  white cells below (`'#'`  is also considered to be white and is counted as well). In sum, and also considering the cell itself, we get  `1 + 2 + 5 + 1 = 9`  as the answer;
-   The only  `'#'`  at the second row has  `1`  cell to the left,  `2`  cells to the right,  `1`  cell above and  `2`  cells below. In sum, we get  `1 + 2 + 1 + 2 + 1 = 7`;
-   The answer for all the other cells is computed the same way.

Input/Output

-   **[execution time limit] 4 seconds (py)**
    
-   **[input] array.array.char board**
    
    A rectangular kuromasu puzzle board, with all numbers replaced with the  `'#'`  symbol. Black cells are represented by  `'*'`  and white cells are represented by  `'.'`. It is guaranteed the board satisfies all the conditions written in the description.
    
    _Guaranteed constraints:_  
    `1 ≤ board.length ≤ 100`,  
    `1 ≤ board[i].length ≤ 100`,  
    `board[i][j] ∈ {'.', '*', '#'}`.
    
-   **[output] array.array.integer**
    
    -   A board that contains the numbers that were missing from the  `'#'`  cells in  `board`, and  `-1`at all other cells.