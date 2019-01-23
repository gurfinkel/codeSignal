
Given a rectangular matrix consisting of zeroes, replace each zero with the number of  neighboringcells for that cell.

**Example**

For

    matrix = [[0, 0, 0], 
			  [0, 0, 0], 
			  [0, 0, 0]] 

the output should be

    neighboringCells(matrix) = [[2, 3, 2], 
							    [3, 4, 3], 
							    [2, 3, 2]] 

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] array.array.integer matrix**
    
    A rectangular matrix of zeros.
    
    _Guaranteed constraints:_  
    `1 ≤ matrix.length ≤ 5`,  
    `1 ≤ matrix[0].length ≤ 5`.
    
-   **[output] array.array.integer**