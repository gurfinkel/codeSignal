
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

-   For  `cell1 = "A1"`  and  `cell2 = "C3"`, the output should be  
    `chessBoardCellColor(cell1, cell2) = true`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/chessBoardCellColor/img/example1.png?_tm=1551474248126)
    
-   For  `cell1 = "A1"`  and  `cell2 = "H3"`, the output should be  
    `chessBoardCellColor(cell1, cell2) = false`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/chessBoardCellColor/img/example2.png?_tm=1551474248394)
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string cell1**
    
    _Guaranteed constraints:_  
    `cell1.length = 2`,  
    `'A' ≤ cell1[0] ≤ 'H'`,  
    `1 ≤ cell1[1] ≤ 8`.
    
-   **[input] string cell2**
    
    _Guaranteed constraints:_  
    `cell2.length = 2`,  
    `'A' ≤ cell2[0] ≤ 'H'`,  
    `1 ≤ cell2[1] ≤ 8`.
    
-   **[output] boolean**
    
    -   `true`  if both cells have the same color,  `false`  otherwise.