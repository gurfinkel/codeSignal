
Check if the given matrix is an  identity matrix.

**Example**

-   For

    matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]] 
    the output should be  
    `isIdentityMatrix(matrix) = true`;
    
-   For

    matrix = [[1, 0, 0], [0, 0, 0], [0, 0, 1]] 
    the output should be  
    `isIdentityMatrix(matrix) = false`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.array.integer matrix**
    
    2-dimensional array of integers representing a square matrix.
    
    _Guaranteed constraints:_  
    `1 ≤ matrix.length ≤ 5`,  
    `matrix[i].length = matrix.length`,  
    `0 ≤ matrix[i][j] ≤ 5`.
    
-   **[output] boolean**
    
    -   `true`  if  `matrix`  is the  _identity matrix_,  `false`otherwise.