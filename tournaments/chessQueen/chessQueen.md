
In chess, queens can move any number of squares vertically, horizontally, or diagonally. Find all the possible coordinates on an  `8 × 8`  chessboard that would be safe from the attack of a queen positioned at coordinate  `q`. Return the coordinates sorted in  lexicographical order.

_Note: The coordinates should be given in the standard chess form:  `a1`,  `a2`  ...  `h8`._

Example

For  `q = "d4"`, the output should be

```
chessQueen(q) =
["a2", "a3", "a5", "a6", "a8",
 "b1", "b3", "b5", "b7", "b8",
 "c1", "c2", "c6", "c7", "c8",
 "e1", "e2", "e6", "e7", "e8",
 "f1", "f3", "f5", "f7", "f8",
 "g2", "g3", "g5", "g6", "g8",
 "h1", "h2", "h3", "h5", "h6", "h7"]

```

Here is a visualization of the answer:  
![](https://codesignal.s3.amazonaws.com/tasks/chessQueen/img/ex.png?_tm=1582002686364)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string q**
    
    A coordinate that indicates where the queen is positioned on the chessboard.
    
    _Guaranteed constraints:_  
    `'a' ≤ q[0] ≤ 'h'`,  
    `1 ≤ q[1] ≤ 8`.
    
-   **[output] array.string**
    
    An array that contains the coordinates of all the positions on the chessboard that the queen would not be able to attack.
