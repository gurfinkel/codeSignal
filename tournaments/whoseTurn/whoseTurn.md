
Imagine a standard chess board with only two white and two black knights placed in their standard starting positions: the white knights on  `b1`  and  `g1`; the black knights on  `b8`  and  `g8`.

![](https://codesignal.s3.amazonaws.com/tasks/whoseTurn/img/initial_pos.png?_tm=1582158090509)

There are two players: one plays for white, the other for black. During each move, the player picks one of his knights and moves it to an unoccupied square according to standard chess rules. Thus, a knight on  `d5`  can move to any of the following squares:  `b6`,  `c7`,  `e7`,  `f6`,  `f4`,  `e3`,  `c3`, and  `b4`, as long as it is not occupied by either a friendly or an enemy knight.

![](https://codesignal.s3.amazonaws.com/tasks/whoseTurn/img/knight.jpg?_tm=1582158090875)

The players take turns in making moves, starting with the white player. Given the configuration  `p`  of the knights after an unspecified number of moves, determine whose turn it is.

Example

For  `p = "b1;g1;b8;g8"`, the output should be  
`whoseTurn(p) = true`.

The configuration corresponds to the initial state of the game. Thus, it's white's turn.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string p**
    
    The positions of the four knights, starting with white knights, separated by a semicolon, in the  chess notation.
    
    _Guaranteed constraints:_  
    `p.length = 11`.
    
-   **[output] boolean**
    
    -   `true`  if white is to move,  `false`  otherwise.
