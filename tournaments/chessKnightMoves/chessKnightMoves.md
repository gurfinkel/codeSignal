
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

![](https://codesignal.s3.amazonaws.com/tasks/chessKnightMoves/img/knight.jpg?_tm=1551474252560)

Example

-   For  `cell = "a1"`, the output should be  
    `chessKnightMoves(cell) = 2`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/chessKnightMoves/img/ex_1.jpg?_tm=1551474253141)
    
-   For  `cell = "c2"`, the output should be  
    `chessKnightMoves(cell) = 6`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/chessKnightMoves/img/ex_2.jpg?_tm=1551474253397)
    

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] string cell**
    
    String consisting of 2 letters - coordinates of the knight on an  `8 × 8`  chessboard in  chess notation.
    
    _Guaranteed constraints:_  
    `cell.length = 2`,  
    `'a' ≤ cell[0] ≤ 'h'`,  
    `1 ≤ cell[1] ≤ 8`.
    
-   **[output] integer**