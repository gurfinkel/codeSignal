
An  _amazon_  (also known as a  _queen + knight compound_) is an imaginary chess piece that can move like a queen or a knight (or, equivalently, like a rook, bishop, or knight). The diagram below shows all squares which the amazon can attack from  `e4`  (circles represent knight-like moves while crosses correspond to queen-like moves).

![](https://codesignal.s3.amazonaws.com/tasks/amazonCheckmate/img/amazon.png?_tm=1581990051096)

Recently, you've come across a diagram with only three pieces left on the board: a white  _amazon_, the white king, and the black king. It's black's move. You don't have time to determine whether the game is over or not, but you'd like to figure it out in your head. Unfortunately, the diagram is smudged and you can't see the position of the black king, so you'll need to consider all possible positions.

Given the positions of the white pieces on a standard chessboard (using algebraic notation), your task is to determine the number of possible black king's positions such that:

-   it's checkmate (i.e. black's king is under the  _amazon's_  attack and it cannot make a valid move);
-   it's check (i.e. black's king is under the  _amazon's_  attack but it can reach a safe square in one move);
-   it's stalemate (i.e. black's king is on a safe square but it cannot make a valid move);
-   black's king is on a safe square and it can make a valid move.

Note that two kings cannot be placed on two adjacent squares (including two diagonally adjacent ones).

Example

-   For  `king = "d3"`  and  `amazon = "e4"`, the output should be  
    `amazonCheckmate(king, amazon) = [5, 21, 0, 29]`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/amazonCheckmate/img/example1.png?_tm=1581990051311)
    
    Red crosses correspond to the checkmate positions, orange pluses refer to check positions, and green circles denote safe squares.
    
-   For  `king = "a1"`  and  `amazon = "g5"`, the output should be  
    `amazonCheckmate(king, amazon) = [0, 29, 1, 29]`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/amazonCheckmate/img/example2.png?_tm=1581990051565)
    
    The stalemate position is marked by a blue square.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string king**
    
    The position of the white king, in  chess notation.
    
    _Guaranteed constraints:_  
    `king.length = 2`,  
    `'a' ≤ king[0] ≤ 'h'`,  
    `1 ≤ king[1] ≤ 8`.
    
-   **[input] string amazon**
    
    The position of the white  _amazon_, in the same notation.
    
    _Guaranteed constraints:_  
    `amazon.length = 2`,  
    `'a' ≤ amazon[0] ≤ 'h'`,  
    `1 ≤ amazon[1] ≤ 8`,  
    `amazon ≠ king`.
    
-   **[output] array.integer**
    
    -   An array of four integers, each equal to the number of black's king positions corresponding to a specific situation. More specifically, the array should be of the form  `[checkmate positions, check positions, stalemate positions, safe positions]`.