
Given the positions of a white  `bishop`  and a black  `pawn`  on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:  
![](https://codefightsuserpics.s3.amazonaws.com/tasks/bishopAndPawn/img/bishop.jpg?_tm=1530791225817)

Example

-   For  `bishop = "a1"`  and  `pawn = "c3"`, the output should be  
    `bishopAndPawn(bishop, pawn) = true`.
    
    ![](https://codefightsuserpics.s3.amazonaws.com/tasks/bishopAndPawn/img/ex1.jpg?_tm=1530791226122)
    
-   For  `bishop = "h1"`  and  `pawn = "h3"`, the output should be  
    `bishopAndPawn(bishop, pawn) = false`.
    
    ![](https://codefightsuserpics.s3.amazonaws.com/tasks/bishopAndPawn/img/ex2.jpg?_tm=1530791226426)
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string bishop**
    
    Coordinates of the white bishop in the  chess notation.
    
-   **[input] string pawn**
    
    Coordinates of the black pawn in the same notation.
    
-   **[output] boolean**
    
    -   `true`  if the bishop can capture the pawn,  `false`  otherwise.