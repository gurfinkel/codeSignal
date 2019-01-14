
A square matrix that is the negative of its  transposeis a  _skew-symmetric matrix_. Find out if the given matrix is  _skew-symmetric_.

**Example**

-   For

matrix = [
	[ 0, 0, 1], 
	[ 0, 0, -2], 
	[-1, 2, 0]] 
    the output should be  
    `isSkewSymmetricMatrix(matrix) = true`;
    
-   For

matrix = [
	[ 0, 0, 1], 
	[ 0, 0, -2], 
	[-1, -2, 0]] 
    the output should be  
    `isSkewSymmetricMatrix(matrix) = false`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.array.integer matrix**
    
    2-dimensional array of integers representing a square matrix.
    
    _Guaranteed constraints:_  
    `1 ≤ matrix.length ≤ 5`,  
    `matrix[i].length = matrix.length`,  
    `-10 ≤ matrix[i][j] ≤ 10`.
    
-   **[output] boolean**
    
    -   `true`  if  `matrix`  is a skew-symmetric matrix,  `false`  otherwise.