
Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).

Example

-   For
    
    ```
    matrix = [[2, 7, 1], 
              [0, 2, 0], 
              [1, 3, 1]]
    
    ```
    
    the output should be  
    `rowsRearranging(matrix) = false`;
    
-   For
    
    ```
    matrix = [[6, 4], 
              [2, 2], 
              [4, 3]]
    
    ```
    
    the output should be  
    `rowsRearranging(matrix) = true`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.array.integer matrix**
    
    A 2-dimensional array of integers.
    
    _Guaranteed constraints:_  
    `1 ≤ matrix.length ≤ 10`,  
    `1 ≤ matrix[0].length ≤ 10`,  
    `-300 ≤ matrix[i][j] ≤ 300`.
    
-   **[output] boolean**