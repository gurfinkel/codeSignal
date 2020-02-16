
Consider a bishop, a knight and a rook on an  `n × m`  chessboard. They are said to form a  _triangle_  if each piece attacks exactly one other piece and is attacked by exactly one piece. Calculate the number of ways to choose positions of the pieces to form a  _triangle_.

Note that the bishop attacks pieces sharing the common diagonal with it; the rook attacks in horizontal and vertical directions; and, finally, the knight attacks squares which are two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from its position.

![](https://codesignal.s3.amazonaws.com/tasks/chessTriangle/img/moves.png?_tm=1551474258008)

Example

For  `n = 2`  and  `m = 3`, the output should be  
`chessTriangle(n, m) = 8`.

![](https://codesignal.s3.amazonaws.com/tasks/chessTriangle/img/combinations.png?_tm=1551474258225)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 40`.
    
-   **[input] integer m**
    
    _Guaranteed constraints:_  
    `1 ≤ m ≤ 40`,  
    `3 ≤ n · m`.
    
-   **[output] integer**
