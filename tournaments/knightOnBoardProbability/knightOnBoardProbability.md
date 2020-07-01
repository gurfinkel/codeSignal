
You have a chessboard with  `n`  rows and  `m`  columns. The knight is placed on the (`x`,  `y`) cell (`0`-indexed). Find the probability that the knight stays on the board after performing the usual  [knight move](https://en.wikipedia.org/wiki/Knight_(chess)#Movement)  `steps`  times randomly. If the knight gets moved off of the board, it can't return to the board again. For example, after the move  `(0, 0) - (-1, -2)`, it's impossible for the knight to return on the board by performing the move  `(-1, -2) - (0, 0)`.

**Example**

For  `n = 8`,  `m = 8`,  `steps = 2`,  `x = 4`, and  `y = 4`, the output should be  
`knightOnBoardProbability(n, m, steps, x, y) = 0.875`.

Start position:

![](https://codesignal.s3.amazonaws.com/tasks/knightOnBoardProbability/img/img1.jpg?_tm=1582034255097)

After these 4 moves, the knight can do any of 8 move types and stay on the board:

![](https://codesignal.s3.amazonaws.com/tasks/knightOnBoardProbability/img/img2.jpg?_tm=1582034255408)

After these 4 moves, the knight can do 6 move types and stay on the board, but there are 2 types of moves that would move the knight off of the board:

![](https://codesignal.s3.amazonaws.com/tasks/knightOnBoardProbability/img/img3.jpg?_tm=1582034255905)

`4/8 * 8/8 + 4/8 * 6/8 = 4/8 + 3/8 = 7/8 = 0.875`

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    The number of rows on the chess board.
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 10`.
    
-   **[input] integer m**
    
    The number of columns on the chess board.
    
    _Guaranteed constraints:_  
    `1 ≤ m ≤ 10`.
    
-   **[input] integer steps**
    
    The number of moves that the knight can make.
    
    _Guaranteed constraints:_  
    `0 ≤ steps ≤ 50`.
    
-   **[input] integer x**
    
    The  `x`-coordinate of the knight.
    
    _Guaranteed constraints:_  
    `0 ≤ x ≤ n - 1`.
    
-   **[input] integer y**
    
    The  `y`-coordinate of the knight.
    
    _Guaranteed constraints:_  
    `0 ≤ y ≤ m - 1`.
    
-   **[output] float**
    
    -   The probability that the knight will remain on the game board after making a certain number of  `steps`  starting from the cell (`x`,  `y`).
    
    Your answer will be considered correct if its absolute error doesn't exceed  `10^-5`.