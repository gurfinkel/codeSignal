
Check if the given matrix is  diagonal.

**Example**

-   For
    
    ```
    matrix = [[1, 0, 0], 
              [0, 5, 0], 
              [0, 0, 3]]
    
    ```
    
    the output should be  
    `isDiagonalMatrix(matrix) = true`;
    
-   For
    
    ```
    matrix = [[1, 0, 0], 
              [0, 5, 0], 
              [2, 0, 3]]
    
    ```
    
    the output should be  
    `isDiagonalMatrix(matrix) = false`.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.integer matrix**
    
    2-dimensional array of integers representing a square matrix.
    
    _Guaranteed constraints:_  
    `1 ≤ matrix.length ≤ 10`,  
    `matrix[i].length = matrix.length`,  
    `0 ≤ matrix[i][j] ≤ 1000`.
    
-   **[output] boolean**
    
    -   `true`  if  `matrix`  is a  _diagonal matrix_,  `false`  otherwise.