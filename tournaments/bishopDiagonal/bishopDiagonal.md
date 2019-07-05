
In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the  _same diagonal_, they immediately rush towards the opposite ends of that same diagonal.

Given the initial positions (in chess notation) of two bishops,  `bishop1`  and  `bishop2`, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal.

Example

-   For  `bishop1 = "d7"`  and  `bishop2 = "f5"`, the output should be  
    `bishopDiagonal(bishop1, bishop2) = ["c8", "h3"]`.
    
    ![](https://codesignal.s3.amazonaws.com/tasks/bishopDiagonal/img/ex_1.jpg?_tm=1551432804841)
    
-   For  `bishop1 = "d8"`  and  `bishop2 = "b5"`, the output should be  
    `bishopDiagonal(bishop1, bishop2) = ["b5", "d8"]`.
    
    The bishops don't belong to the same diagonal, so they don't move.  
    ![](https://codesignal.s3.amazonaws.com/tasks/bishopDiagonal/img/ex_2.jpg?_tm=1551432805142)
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string bishop1**
    
    Coordinates of the first bishop in  chess notation.
    
    _Guaranteed constraints:_  
    `bishop1.length = 2`,  
    `'a' ≤ bishop1[0] ≤ 'h'`,  
    `1 ≤ bishop1[1] ≤ 8`.
    
-   **[input] string bishop2**
    
    Coordinates of the second bishop in the same notation.
    
    _Guaranteed constraints:_  
    `bishop2.length = 2`,  
    `'a' ≤ bishop2[0] ≤ 'h'`,  
    `1 ≤ bishop2[1] ≤ 8`.
    
-   **[output] array.string**
    
    -   Coordinates of the bishops in  lexicographical order  after they check the diagonals they stand on.