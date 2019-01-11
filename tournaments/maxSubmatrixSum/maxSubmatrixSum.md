
Given a rectangular matrix of integers and integers  `n`  and  `m`, we are looking for the  submatrix  of size  `n × m`  that has the maximal sum among all submatrices of the given size.

Example

For

    matrix = [[1, 12, 11, 10], 
			  [4, 3, 2, 9], 
			  [5, 6, 7, 8]] 

`n = 2`, and  
`m = 1`, the output should be  
`maxSubmatrixSum(matrix, n, m) = 19`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.integer matrix**
    
    2-dimensional array of integers representing a rectangular matrix.
    
    _Guaranteed constraints:_  
    `1 ≤ matrix.length ≤ 5`,  
    `1 ≤ matrix[0].length ≤ 5`,  
    `-15 ≤ matrix[i][j] ≤ 15`.
    
-   **[input] integer n**
    
    A positive integer not greater than the number of matrix rows.
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ matrix.length`.
    
-   **[input] integer m**
    
    A positive integer not greater than the number of matrix columns.
    
    _Guaranteed constraints:_  
    `1 ≤ m ≤ matrix[i].length`.
    
-   **[output] integer**
    
    -   The sum of all elements in the desired  `n × m`submatrix.